<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Likes;
use App\Models\Post;
use App\Models\User;

class LikesController extends Controller
{
    //

    public function likePost(Request $request)
    {
        // get token from request
        $token = $request->bearerToken();
        
        // get user id from token
        $user = User::where('api_token', $token)->first();
        $userId = $user->id;

        // get post id from request
        $postId = $request->input('post_id');

        // check if post exists
        $post = Post::find($postId);
        if (!$post) {
            return response()->json([
                'message' => 'Post not found'
            ], 404);
        }

        // check if user already liked post
        $like = Likes::where('user_id', $userId)->where('post_id', $postId)->first();
        if ($like) {
            // unlike
            $like->delete();
            return response()->json([
                'id' => $like->id,
                'likestatus' => 'unliked',
                'message' => 'Post unliked'
            ], 200);
        }

        // create like
        $like = new Likes();
        $like->user_id = $userId;
        $like->post_id = $postId;
        $like->save();
        return response()->json([
            'id' => $like->id,
            'likestatus' => 'liked',
            'message' => 'Post liked'
        ], 200);

    }

    public function unlikePost(Request $request)
    {
        $post = Post::find($request->post_id);
        $user = User::find($request->user_id);
        $like = Likes::where('user_id', $user->id)->where('post_id', $post->id)->first();
        $like->delete();
        return response()->json([
            'message' => 'Post unliked successfully',
            'like' => $like
        ], 200);
    }

    public function getLikes($iduser)
    {
        $user = User::find($iduser);
        $likes = Likes::where('user_id', $user->id)->get();
        
        return response()->json([
            'likes' => $likes
        ], 200);
    }

}
