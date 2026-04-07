<?php

namespace App\Http\Controllers\Api; // <-- Ajoute bien "\Api" ici

use App\Http\Controllers\Controller; // <-- Obligatoire pour étendre "Controller"
use Illuminate\Http\Request;
use App\Models\Contact;
use App\Mail\ContactNotification;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:20',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        $contact = Contact::create($data);

        Mail::to('emanuelle.lang11@gmail.com')->send(new ContactNotification($contact));

        return response()->json(['message' => 'Message envoyé avec succès !'], 201);
    }
}