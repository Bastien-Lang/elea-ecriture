<?php

namespace App\Filament\Resources\GalleryItems;

use App\Filament\Resources\GalleryItems\Pages\CreateGalleryItem;
use App\Filament\Resources\GalleryItems\Pages\EditGalleryItem;
use App\Filament\Resources\GalleryItems\Pages\ListGalleryItems;
use App\Filament\Resources\GalleryItems\Pages\ViewGalleryItem;
use App\Filament\Resources\GalleryItems\Schemas\GalleryItemForm;
use App\Filament\Resources\GalleryItems\Schemas\GalleryItemInfolist;
use App\Filament\Resources\GalleryItems\Tables\GalleryItemsTable;
use App\Models\GalleryItem;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;

class GalleryItemResource extends Resource
{
    protected static ?string $model = GalleryItem::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'GalleryItem';

    public static function form(Schema $schema): Schema
    {
        return $schema->components([
            Select::make('theme_id')
                ->relationship('theme', 'name')
                ->required()
                ->createOptionForm([ // Permet de créer un thème sans quitter la page !
                    TextInput::make('name')->required(),
                    TextInput::make('slug')->required(),
                ]),
            Select::make('type')
                ->options(['peinture' => 'Peinture', 'photo' => 'Photo'])
                ->required(),
            TextInput::make('title')->label('Titre (optionnel)'),
            FileUpload::make('image_path')
                ->image()
                ->directory('gallery') // Les images iront dans storage/app/public/gallery
                ->required(),
        ]);
    }

    public static function infolist(Schema $schema): Schema
    {
        return GalleryItemInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return GalleryItemsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListGalleryItems::route('/'),
            'create' => CreateGalleryItem::route('/create'),
            'view' => ViewGalleryItem::route('/{record}'),
            'edit' => EditGalleryItem::route('/{record}/edit'),
        ];
    }
}
