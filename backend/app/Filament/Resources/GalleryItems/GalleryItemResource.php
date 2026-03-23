<?php

namespace App\Filament\Resources\GalleryItems;

use App\Filament\Resources\GalleryItems\Pages\CreateGalleryItem;
use App\Filament\Resources\GalleryItems\Pages\EditGalleryItem;
use App\Filament\Resources\GalleryItems\Pages\ListGalleryItems;
use App\Filament\Resources\GalleryItems\Pages\ViewGalleryItem;
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

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-photo';

    protected static ?string $recordTitleAttribute = 'title';

    public static function form(Schema $schema): Schema
    {
        return $schema->components([
            Select::make('theme_id')
                ->relationship('theme', 'name')
                ->required()
                ->createOptionForm([
                    TextInput::make('name')->required(),
                    TextInput::make('slug')->required(),
                ]),
            Select::make('type')
                ->options(['peinture' => 'Peinture', 'photo' => 'Photo'])
                ->required(),
            TextInput::make('title')->label('Titre (optionnel)'),
            FileUpload::make('image_path')
                ->image()
                ->directory('gallery')
                ->required()
                ->optimize('webp')
                ->disk('public'),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                \Filament\Tables\Columns\ImageColumn::make('image_path')
                    ->label('Image')
                    ->disk('public'),

                \Filament\Tables\Columns\TextColumn::make('title')
                    ->label('Titre')
                    ->searchable(),

                \Filament\Tables\Columns\TextColumn::make('theme.name')
                    ->label('Thème'),

                \Filament\Tables\Columns\TextColumn::make('type')
                    ->label('Type')
                    ->badge(),
            ])
            ->filters([
                //
            ])
            ->actions([
               //rajouter les actions pour quick edit et quick delete
            ])
            ->bulkActions([
            //rajouter les actions pour quick edit et quick delete
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListGalleryItems::route('/'),
            'create' => CreateGalleryItem::route('/create'),
            'edit' => EditGalleryItem::route('/{record}/edit'),
        ];
    }
}