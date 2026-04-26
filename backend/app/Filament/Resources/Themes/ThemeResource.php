<?php

namespace App\Filament\Resources\Themes;

use App\Filament\Resources\Themes\Pages\CreateTheme;
use App\Filament\Resources\Themes\Pages\EditTheme;
use App\Filament\Resources\Themes\Pages\ListThemes;
use App\Filament\Resources\Themes\Pages\ViewTheme;
use App\Filament\Resources\Themes\Schemas\ThemeForm;
use App\Filament\Resources\Themes\Schemas\ThemeInfolist;
use App\Filament\Resources\Themes\Tables\ThemesTable;
use App\Models\Theme;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Filament\Forms\Components\TextInput;
use Illuminate\Support\Str;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Actions\Action;
use Filament\Actions\BulkAction;
use Illuminate\Database\Eloquent\Collection;

class ThemeResource extends Resource
{
    protected static ?string $model = Theme::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'Theme';

    public static function form(Schema $schema): Schema
    {
        return $schema->components([
            TextInput::make('name')
                ->required()
                ->live(onBlur: true)
                ->afterStateUpdated(fn ($state, $set) => $set('slug', Str::slug($state))),
            TextInput::make('slug')->required()->disabled()->dehydrated(),
        ]);
    }

    public static function infolist(Schema $schema): Schema
    {
        return ThemeInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
    return $table
        ->columns([
            // Affiche le nom du thème
            TextColumn::make('name')
                ->label('Nom du Thème')
                ->sortable()
                ->searchable(),

            // Affiche le slug (optionnel, mais utile pour vérifier)
            TextColumn::make('slug')
                ->label('Slug')
                ->color('gray')
                ->fontFamily('mono'),

            // Affiche la date de création pour s'y retrouver
            TextColumn::make('created_at')
                ->label('Créé le')
                ->dateTime('d/m/Y H:i')
                ->sortable()
                ->toggleable(isToggledHiddenByDefault: true),
        ])
        ->filters([
            //
        ])
        ->actions([
            Action::make('view')
                ->label('Voir')
                ->url(fn (Theme $record) => ThemeResource::getUrl('view', ['record' => $record])),
            Action::make('edit')
                ->label('Éditer')
                ->url(fn (Theme $record) => ThemeResource::getUrl('edit', ['record' => $record])),
        ])
        ->bulkActions([

        ]);
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
            'index' => ListThemes::route('/'),
            'create' => CreateTheme::route('/create'),
            'view' => ViewTheme::route('/{record}'),
            'edit' => EditTheme::route('/{record}/edit'),
        ];
    }
}
