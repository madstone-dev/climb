<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostVideo extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'post_id',
        'path',
        'thumbnail_path',
        'converted',
    ];

    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
