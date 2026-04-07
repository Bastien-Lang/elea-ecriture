<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <style>
        /* Styles inline pour une meilleure compatibilité email */
        body { 
            margin: 0; 
            padding: 0; 
            background-color: #FDF8E6; /* Ton Beige de fond */
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #2D2D2D;
        }
        .wrapper {
            width: 100%;
            table-layout: fixed;
            background-color: #FDF8E6;
            padding: 40px 0;
        }
        .main {
            background-color: #ffffff;
            margin: 0 auto;
            width: 100%;
            max-width: 600px;
            border-radius: 30px;
            border: 1px solid #FDF8E6;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        .header {
            background-color: #96031A; /* Ton Bordeaux */
            padding: 40px;
            text-align: center;
        }
        .header h1 {
            color: #FDF8E6;
            margin: 0;
            font-size: 24px;
            font-weight: 300;
            letter-spacing: 2px;
            text-transform: uppercase;
        }
        .content {
            padding: 40px;
        }
        .section-title {
            color: #96031A;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .info-block {
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 1px solid #FDF8E6;
        }
        .info-value {
            font-size: 16px;
            color: #2D2D2D;
        }
        .message-box {
            background-color: #FDFCF0;
            padding: 25px;
            border-radius: 20px;
            border-left: 4px solid #96031A;
            font-style: italic;
            line-height: 1.6;
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #9A9A8B;
        }
        .button {
            display: inline-block;
            padding: 15px 30px;
            background-color: #96031A;
            color: #FDF8E6 !important;
            text-decoration: none;
            border-radius: 50px;
            margin-top: 20px;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="main">
            <div class="header">
                <h1>Nouveau Message</h1>
            </div>

            <div class="content">
                <div class="info-block">
                    <div class="section-title">De la part de</div>
                    <div class="info-value"><strong>{{ $contact->name }}</strong></div>
                </div>

                <div class="info-block">
                    <div class="section-title">Coordonnées</div>
                    <div class="info-value">
                        Email : {{ $contact->email }}<br>
                        Tél : {{ $contact->phone ?? 'Non communiqué' }}
                    </div>
                </div>

                <div class="section-title">Son message</div>
                <div class="message-box">
                    {!! nl2br(e($contact->message)) !!}
                </div>

                <div style="text-align: center;">
                    <a href="mailto:{{ $contact->email }}" class="button">Répondre par email</a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>