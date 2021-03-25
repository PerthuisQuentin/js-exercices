# Utilisation d'une API de todo list

Le but est de réaliser une interface pour gérer une liste de tâches.

Fonctionnalités à réaliser (Et plus si affinités) :

- Récupérer la liste des tâches via l'API
- Ajouter une tâche
- Cocher ou décocher une tâche
- Suppression d'une tâche

# API

Pour pouvoir utiliser l'API, commencer par installer les dépendances via `npm i` puis lancer le serveur via `npm start`

Les actions disponibles sont :

## - Récupérer la liste des tâches

GET /todos

## - Création d'une tâche

POST /todos

Example de body à envoyer

```json
{
    "label": "Texte de la tâche",
    "checked": true
}
```

label : string, obligatoire

checked : boolean, faculatif (false par défaut)

## - Récupérer une tâche via son id

GET /todos/:id

## - Suppression d'une tâche

DELETE /todos/:id

## - Mise à jour d'une tâche

PUT /todos/:id

Example de body à envoyer

```json
{
    "label": "Texte de la tâche",
    "checked": true
}
```

label : string, faculatif

checked : boolean, faculatif