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

        $images = $request->images;
        $video = $request->video;

        $maxSize = 540;

        // 파일 저장
        if($images && count($images) > 0){
            foreach($images as $image){
                $imageFile = new File($image['file']);
                $hashname = $imageFile->hashName();
                $extention = $imageFile->extension();
                $size = getimagesize($imageFile);
                $width = $size[0];
                $height = $size[1];
                if(($width > $maxSize || $height > $maxSize) && strtolower($extention) !== "gif"){
                    $resize = Image::make($imageFile)->resize($maxSize,$maxSize,function ($constraint) {
                        $constraint->aspectRatio();
                    })->encode($extention,80);
                    $imagePath = Storage::disk('public')->put('images/'.$hashname,$resize);
                }else{
                    $imagePath = Storage::disk('public')->putFile('images',$imageFile);
                }
                PostImage::create([
                    'post_id' => $post->id,
                    'path' => $imagePath,
                    'converted' => 1
                ]);
            }
        }else if($video){
            $videoFile = new File($video['file']);
            $extention = $videoFile->extension();

            $mainFileName = Str::random(6).now()->timestamp.".".$extention;
            $previewFileName = Str::random(6).now()->timestamp.".mp4";
            $picName = Str::random(6).now()->timestamp.'.jpg';

            $localVideoPath = 'videos/'.$mainFileName;

            //save locally
            Storage::disk('public')->put('videos/'.$mainFileName, file_get_contents($videoFile));

            try{
                $format = new FFMpeg\Format\Video\X264();
                $format->setAudioCodec("libmp3lame");

                FFMpeg::fromDisk('public')
                ->open($localVideoPath)
                ->export()
                ->toDisk('public')
                ->inFormat($format)
                ->resize($maxSize,$maxSize,'width')
                ->save('videos/'.$previewFileName);

                FFMpeg::fromDisk('public')
                ->open($localVideoPath)
                ->getFrameFromSeconds(1)
                ->export()
                ->toDisk('public')
                ->save('video_thumbnails/'.$picName);
            }catch (EncodingException $exception) {
                $command = $exception->getCommand();
                $errorLog = $exception->getErrorOutput();
            }
            
            // do any further processing
            // return response( array( "message" => "Video Uploaded.", "data" => [
            //     "video_file" => $mainFilePath,
            //     "video_preview_file" = $previewFilePath,
            //     "video_pic_file" => $picName
            // ]  ), 200 );


            // $videoPath = Storage::disk('public')->putFile('videos', new File($video['file']));
            // PostVideo::create([
            //     'post_id' => $post->id,
            //     'path' => $videoPath,
            //     'converted' => 0
            // ]);
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
