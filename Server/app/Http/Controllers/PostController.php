<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Post;
use Symfony\Component\VarDumper\VarDumper;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Response;

class PostController extends Controller
{

    public function index()
    {
        // Get all posts inner join table likes
        $posts = Post::with('likes')->orderBy('id', 'desc')->paginate(5);
        return response()->json($posts);
    }

    //get by id
    public function show($id)
    {
        $post = Post::find($id);
        return json_encode($post);
    }


    public function destroy($id)
    {
        $post = Post::find($id);
        // find user with token sent
        $user = auth()->user();
        
        // check if user is owner of post
        if ($user->id == $post->user_id) {
            $post->likes()->delete();
            $post->delete();

            $post->delete();
            //delete image
            $image_path = public_path('images/' . $post->image);

            //delete image from folder
            @unlink($image_path);

            return response()->json(['message' => 'Post deleted successfully']);
        } else {
            // return 401 if user is not owner of post
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    }

    //modify

    public function update(Request $request)
    {

        // return formdata

        //Validate request
        $request->validate([
            'title' => 'required',
            'body' => 'required',
            'image' => 'nullable|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $id = $request->input('id');

        // get post with id
        $post = Post::find($id);
        // is authenticated user owner of post
        $user = auth()->user();
        if ($user->id != $post->user_id) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $image_name = $post->image;

        //delete from folder image if new image is uploaded
        if ($request->hasFile('image')) {
            $image_path = public_path('images/' . $image_name);
            @unlink($image_path);

            //store image
            $image = $request->file('image');

            // Sauvegarde de l'image dans le dossier images
            $image_name = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images'), $image_name);
        }

        // Update post
        $post->title = $request->title;
        $post->body = $request->body;
        $post->image = $image_name;

        $post->save();
        return $post;
    }

    public function store(Request $request)
    {
        //Validate request
        $request->validate([
            'title' => 'required',
            'body' => 'required',
            'image' => 'mimes:jpeg,jpg,png|required|max:100000'
        ]);

        //store image
        $image = $request->file('image');

        // A modifier
        $image_name = time() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images'), $image_name);

        $post = new Post;
        $post->title = $request->title;
        $post->body = $request->body;
        $post->image = $image_name;
        $post->save();
        return $post;
    }



    // test pagination
    public function paginationTest()
    {
        $posts = Post::paginate(5);
        return json_encode($posts);
    }

}
