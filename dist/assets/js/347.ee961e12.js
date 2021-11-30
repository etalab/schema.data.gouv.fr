(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{838:function(e,t,r){"use strict";r.r(t);var i=r(44),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("MenuSchema"),e._v(" "),r("h2",{attrs:{id:"stationstaxi"}},[e._v("stationstaxi")]),e._v(" "),r("p",[e._v("Stations de taxi")]),e._v(" "),r("p",[e._v("Spécification des stations de taxi à usage public")]),e._v(" "),r("ul",[r("li",[e._v("Schéma créé le : 07.04.2021")]),e._v(" "),r("li",[e._v("Site web : https://github.com/openmaraude/schema-stationstaxi")]),e._v(" "),r("li",[e._v("Version : 0.1.0")]),e._v(" "),r("li",[e._v("Clé primaire : "),r("code",[e._v("id")])])]),e._v(" "),r("h3",{attrs:{id:"modele-de-donnees"}},[e._v("Modèle de données")]),e._v(" "),r("h5",{attrs:{id:"liste-des-proprietes"}},[e._v("Liste des propriétés")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Propriété")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Obligatoire")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"#propriete-id"}},[e._v("id")])]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td",[e._v("Oui")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#propriete-nom"}},[e._v("nom")])]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td",[e._v("Oui")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#propriete-insee"}},[e._v("insee")])]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td",[e._v("Oui")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#propriete-xlong"}},[e._v("xlong")])]),e._v(" "),r("td",[e._v("nombre réel")]),e._v(" "),r("td",[e._v("Oui")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#propriete-ylat"}},[e._v("ylat")])]),e._v(" "),r("td",[e._v("nombre réel")]),e._v(" "),r("td",[e._v("Oui")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#propriete-adresse"}},[e._v("adresse")])]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td",[e._v("Non")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#propriete-emplacements"}},[e._v("emplacements")])]),e._v(" "),r("td",[e._v("nombre entier")]),e._v(" "),r("td",[e._v("Non")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#propriete-no-appel"}},[e._v("no_appel")])]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td",[e._v("Non")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"#propriete-info"}},[e._v("info")])]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td",[e._v("Non")])])])]),e._v(" "),r("h4",{attrs:{id:"propriete-id"}},[e._v("Propriété "),r("code",[e._v("id")])]),e._v(" "),r("blockquote",[r("p",[r("em",[e._v("Description : L'identifiant unique et stable de la station, délivré par le producteur ou à défaut par le.taxi. "),r("code",[e._v("INSEE-T-xxx")]),e._v(" où "),r("code",[e._v("INSEE")]),e._v(" est le code INSEE de la commune et "),r("code",[e._v("xxx")]),e._v(" est le numéro d’ordre sur 3 chiffres."),r("br"),e._v("Ex : 38185-T-001")])])]),e._v(" "),r("ul",[r("li",[e._v("Valeur obligatoire")]),e._v(" "),r("li",[e._v("Type : chaîne de caractères")]),e._v(" "),r("li",[e._v("Motif : "),r("code",[e._v("^([013-9]\\d|2[AB1-9])\\d{3}-T-\\d{3}$")])])]),e._v(" "),r("h4",{attrs:{id:"propriete-nom"}},[e._v("Propriété "),r("code",[e._v("nom")])]),e._v(" "),r("blockquote",[r("p",[r("em",[e._v("Description : Nom de la station ou nom donné dans son utilisation quotidienne. Recommandation : inutile de répéter le mot station ou taxi"),r("br"),e._v("Ex : Gare - Frise")])])]),e._v(" "),r("ul",[r("li",[e._v("Valeur obligatoire")]),e._v(" "),r("li",[e._v("Type : chaîne de caractères")])]),e._v(" "),r("h4",{attrs:{id:"propriete-insee"}},[e._v("Propriété "),r("code",[e._v("insee")])]),e._v(" "),r("blockquote",[r("p",[r("em",[e._v("Description : Le code INSEE de la commune où la station est localisée."),r("br"),e._v("Ex : 38185")])])]),e._v(" "),r("ul",[r("li",[e._v("Valeur obligatoire")]),e._v(" "),r("li",[e._v("Type : chaîne de caractères")]),e._v(" "),r("li",[e._v("Motif : "),r("code",[e._v("^([013-9]\\d|2[AB1-9])\\d{3}$")])])]),e._v(" "),r("h4",{attrs:{id:"propriete-xlong"}},[e._v("Propriété "),r("code",[e._v("xlong")])]),e._v(" "),r("blockquote",[r("p",[r("em",[e._v("Description : La longitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation de l'entrée du lieu exprimée dans le système de coordonnées WGS84."),r("br"),e._v("Ex : 1.452323")])])]),e._v(" "),r("ul",[r("li",[e._v("Valeur obligatoire")]),e._v(" "),r("li",[e._v("Type : nombre réel")]),e._v(" "),r("li",[e._v("Valeur entre -180 et 180")])]),e._v(" "),r("h4",{attrs:{id:"propriete-ylat"}},[e._v("Propriété "),r("code",[e._v("ylat")])]),e._v(" "),r("blockquote",[r("p",[r("em",[e._v("Description : La latitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation de l'entrée du lieu exprimée dans le système de coordonnées WGS84."),r("br"),e._v("Ex : 46.59698")])])]),e._v(" "),r("ul",[r("li",[e._v("Valeur obligatoire")]),e._v(" "),r("li",[e._v("Type : nombre réel")]),e._v(" "),r("li",[e._v("Valeur entre -90 et 90")])]),e._v(" "),r("h4",{attrs:{id:"propriete-adresse"}},[e._v("Propriété "),r("code",[e._v("adresse")])]),e._v(" "),r("blockquote",[r("p",[r("em",[e._v("Description : L’adresse du lieu compréhensible par le grand public pour assurer le guidage du client. Exemple : “3, rue de la gare” ; pour les lieux proches des sorties d’autoroute ou de nationale : “A11 sortie 7 Le Mans Nord” ; pour les zones rurales sans adresse : “croisement de route 1 - route 2” ou “le long de route X après le passage à niveau”."),r("br"),e._v("Ex : 3 rue de la Gare, 92300, Levallois-Peret")])])]),e._v(" "),r("ul",[r("li",[e._v("Valeur optionnelle")]),e._v(" "),r("li",[e._v("Type : chaîne de caractères")])]),e._v(" "),r("h4",{attrs:{id:"propriete-emplacements"}},[e._v("Propriété "),r("code",[e._v("emplacements")])]),e._v(" "),r("blockquote",[r("p",[r("em",[e._v("Description : Nombre total d’emplacements, capacité d’accueil de la station. Si fourni, possibilité de calculer un ratio d’usage."),r("br"),e._v("Ex : 2")])])]),e._v(" "),r("ul",[r("li",[e._v("Valeur optionnelle")]),e._v(" "),r("li",[e._v("Type : nombre entier")])]),e._v(" "),r("h4",{attrs:{id:"propriete-no-appel"}},[e._v("Propriété "),r("code",[e._v("no_appel")])]),e._v(" "),r("blockquote",[r("p",[r("em",[e._v("Description : Numéro de téléphone de la station à disposition des clients pour obtenir un taxi."),r("br"),e._v("Ex : 0476544254")])])]),e._v(" "),r("ul",[r("li",[e._v("Valeur optionnelle")]),e._v(" "),r("li",[e._v("Type : chaîne de caractères")])]),e._v(" "),r("h4",{attrs:{id:"propriete-info"}},[e._v("Propriété "),r("code",[e._v("info")])]),e._v(" "),r("blockquote",[r("p",[r("em",[e._v("Description : Faire remonter des informations ou commentaires, utiles pour un client, si les champs précédents ne correspondent pas. Si plusieurs informations sont renseignées, le séparateur est le point-virgule."),r("br"),e._v("Ex : Niveau -1 de la gare")])])]),e._v(" "),r("ul",[r("li",[e._v("Valeur optionnelle")]),e._v(" "),r("li",[e._v("Type : chaîne de caractères")])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);