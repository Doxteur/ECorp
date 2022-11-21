<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Post;
use Symfony\Component\VarDumper\VarDumper;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Response;

class PostController extends Controller
{
    //
    
    public function index()
    {
        $posts =Post::orderBy('created_at', 'desc')->get();
       
        return response()->json($posts);
    }
    public function store(Request $request)
    {
        //Validate request
        $request->validate([
            'title' => 'required',
            'body' => 'required',
            'image' => 'mimes:jpeg,jpg,png|required|max:10000' 
        ]);

        //store image
        $image = $request->file('image');
        $image_name = time() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images'), $image_name);
        
        $post = new Post;
        $post->title = $request->title;
        $post->body = $request->body;
        $post->image = $image_name;
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
