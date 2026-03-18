<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Publication;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Publication::create([
            'title' => 'Des éclats de nuit plein le coeur',
            'description' => "Myo a quatre ans. Elle a disparu. Personne ne sait où elle est.
                                Elle attend, enfermée dans sa carapace, d'être retrouvée.
                                Dans un paysage dévasté par le passage de l'Ogre sur ses terres intimes, elle est perdue. Seule. En exil.
                                Mais sans elle, Myosothys n'arrive plus à vivre.
                                Alors elle la cherche. Partout.
                                Sa quête la mènera dans les profondeurs de la psyché, sur un chemin de résilience, pour alchimiser les blessures de l'âme et du corps. 
                                Retrouver la lumière. La paix intérieure.
                                Et prendre son envol.

                                Dans ce voyage intérieur, Emanuelle LANG propose un récit initiatique mêlant poésie, symboles et psychologie, pour mieux appréhender les conséquences de l'inceste ou du viol.
                                A travers une histoire singulière, elle délivre un message aux résonances universelles sur le traumatisme et comment avancer avec, de l'enfant à l'adulte.
                                Une invitation à changer son regard sur le monde, pour y déployer plus d'humanité...",
            'image_path' => 'publications/cover1.jpg', // On utilisera une image de test plus tard
            'published_at' => now(),
        ]);
    }
}
