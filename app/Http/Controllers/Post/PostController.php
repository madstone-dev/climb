<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Image;
use File;
use Storage;
use Validator;
use Auth;
use Redirect;
use Str;
use FFMpeg;
use App\Models\Post;
use App\Models\PostImage;
use App\Models\PostVideo;
use App\Models\Hashtag;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('CreatePost');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'board' => 'required',
            'content' => 'required',
            'images.*.file' => 'mimes:jpeg,png,jpg,gif|max:10000',
            'video.file' => 'mimetypes:video/*|max:512000'
        ],[
            'images.*.file.mimes' => '사용가능한 이미지 확장자는 jpeg,png,jpg,gif 입니다.',
            'images.*.file.max' => '이미지 용량은 10mb 이하여야합니다.',
            'video.file.mimetypes' => '사용가능한 비디오 확장자가 아닙니다.',
            'video.file.max' => '비디오 용량은 512mb까지 가능합니다.'
        ])->validate();

        $post = Post::create([
            'user_id' => Auth::user()->id,
            'board' => $request->board['id'],
            'content' => $request->content
        ]);

        preg_match_all("/#([0-9a-zA-Z가-힣]*)/",$request->content,$words);
        foreach($words[0] as $word)
        {
            $existsTag = Hashtag::where('content',$word)->first();
            if($existsTag){
                $existsTag->posts()->attach($post->id);
            }else{
                $hashtag = Hashtag::create([
                    'content' => $word
                ]);
                $hashtag->posts()->attach($post->id);
            }
        }

        $images = $request->images;
        $video = $request->video;

        $maxSize = 600;

        // 파일 저장
        if($images && count($images) > 0){
            foreach($images as $image){
                $imageFile = new File($image['file']);
                $hashname = $imageFile->hashName();
                $extention = $imageFile->extension();
                $imagePath = 'images/'.$hashname;
                $size = getimagesize($imageFile);
                $width = $size[0];
                $height = $size[1];
                $orientate = Image::make($imageFile)->orientate();
                if(($width > $maxSize || $height > $maxSize) && strtolower($extention) !== "gif"){
                    $resize = $orientate->resize($maxSize,$maxSize,function ($constraint) {
                        $constraint->aspectRatio();
                    })->encode($extention,80);
                    Storage::disk('public')->put($imagePath,$resize);
                }else{
                    Storage::disk('public')->put($imagePath,$orientate);
                }
                PostImage::create([
                    'post_id' => $post->id,
                    'path' => $imagePath
                ]);
            }
        }else if($video){
            $videoFile = new File($video['file']);
            $extention = $videoFile->extension();

            $mainFileName = Str::random(6).now()->timestamp.".".$extention;
            $previewFileName = Str::random(6).now()->timestamp.".mp4";
            $thumbnailName = Str::random(6).now()->timestamp.'.jpg';

            $localVideoPath = 'videos/'.$mainFileName;
            $previewFilePath = 'videos/'.$previewFileName;
            $thumbnailPath = 'video_thumbnails/'.$thumbnailName;

            //save locally
            Storage::disk('public')->put($localVideoPath, file_get_contents($videoFile));

            $savedVideo = PostVideo::create([
                'post_id' => $post->id,
                'path' => $localVideoPath,
                'converted' => 0
            ]);

            try{
                $media = FFMpeg::fromDisk('public')
                ->open($localVideoPath);

                $dimensions = $media
                ->getVideoStream()
                ->getDimensions();

                dd($dimensions);

                $maxSize = 600;
                $format = new FFMpeg\Format\Video\X264();
                $format->setAudioCodec("libmp3lame");

                $videoWidth = $dimensions->getWidth();
                $videoHeight = $dimensions->getHeight();
                
                $ratio = min($maxSize/$videoWidth,$maxSize/$videoHeight);
                $ratioWidth = $videoWidth*$ratio;
                $ratioHeight = $videoHeight*$ratio;

                // if($videoWidth > $maxSize || $videoHeight > $maxSize){
                //     $media
                //     ->export()
                //     ->toDisk('public')
                //     ->inFormat($format)
                //     ->resize(ceil($ratioWidth),ceil($ratioHeight),'fit')
                //     ->save($previewFilePath);
                // }else{
                //     $media
                //     ->export()
                //     ->toDisk('public')
                //     ->inFormat($format)
                //     ->resize(ceil($videoWidth),ceil($videoHeight),'fit')
                //     ->save($previewFilePath);
                // }

                $media
                ->export()
                ->toDisk('public')
                ->inFormat($format)
                ->resize(ceil($videoWidth),ceil($videoHeight),'fit')
                ->save($previewFilePath);

                FFMpeg::fromDisk('public')
                ->open($previewFilePath)
                ->getFrameFromSeconds(1)
                ->export()
                ->toDisk('public')
                ->save($thumbnailPath);

                Storage::disk('public')->delete($localVideoPath);

                $savedVideo->path = $previewFilePath;
                $savedVideo->thumbnail_path = $thumbnailPath;
                $savedVideo->converted = 1;
                $savedVideo->save();
            }catch (EncodingException $exception) {
                $command = $exception->getCommand();
                $errorLog = $exception->getErrorOutput();
            }
        }

        return Redirect::route('home');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
