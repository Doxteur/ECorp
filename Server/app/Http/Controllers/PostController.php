<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Post;
use Symfony\Component\VarDumper\VarDumper;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Response;
use App\Models\Logs;

class PostController extends Controller
{

    /**
     * Get all posts
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Get all posts inner join table likes
        $posts = Post::with('likes')->orderBy('id', 'desc')->paginate(5);

        return response()->json($posts);
    }

    /**
     * Get all posts with and id
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function show($id)
    {
        $post = Post::find($id);
        return json_encode($post);
    }

    /**
     * Delete a post with verification of user authorization
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
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

            // add log
            $log = new Logs();
            $log->id_user = $user->id;
            $log->action = 'delete';
            $log->save();


            return response()->json(['message' => 'Post deleted successfully']);
        } else {
            // return 401 if user is not owner of post
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    }


    /**
     * Met à jour un message avec vérification de l'autorisation de l'utilisateur
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        //Validate request
        $request->validate([
            'title' => 'required',
            'body' => 'required',
            'image' => 'nullable|mimes:jpeg,jpg|max:2048',
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

        $log = new Logs();
        $log->id_user = $user->id;
        $log->action = 'Modify';
        $log->save();

        return $post;
    }

    /**
     * Créer un nouveau post
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        //Validate request
        $request->validate([
            'title' => 'required',
            'body' => 'required',
            'image' => 'mimes:jpeg,jpg|required|max:100000'
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

        $user = auth()->user();
        $log = new Logs();
        $log->id_user = $user->id;
        $log->action = 'Ajout';
        $log->save();

        return $post;
    }

    // test pagination
    public function paginationTest()
    {
        $posts = Post::paginate(5);
        return json_encode($posts);
    }
}
