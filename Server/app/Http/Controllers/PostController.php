<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Post;


class PostController extends Controller
{
    //
    public function index()
    {
        return Post::orderBy('created_at', 'desc')->get();
    }
    public function store(Request $request)
    {
        $post = new Post;
        $post->title = $request->title;
        $post->body = $request->body;
        $post->save();
        return $post;
    }
    public function destroy($id)
    {
        $post = Post::find($id);
        $post->delete();
        return $post;
    }
    
}
