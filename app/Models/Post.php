<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'user_id',
        'board',
        'content',
    ];

    public function hashtags()
    {
        return $this->belongsToMany(Hashtag::class,'hashtag_post');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function video()
    {
        return $this->hasOne(PostVideo::class);
    }

    public function images()
    {
        return $this->hasMany(PostImage::class);
    }
}
