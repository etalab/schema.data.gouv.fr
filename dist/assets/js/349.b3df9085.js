(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{840:function(e,t,s){"use strict";s.r(t);var i=s(44),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("MenuSchema"),e._v(" "),s("h1",{attrs:{id:"schema-des-stations-de-taxi"}},[e._v("Schéma des stations de taxi")]),e._v(" "),s("p",[e._v("Ce schéma permet de modéliser les stations de taxi à usage public.")]),e._v(" "),s("h2",{attrs:{id:"contexte"}},[e._v("Contexte")]),e._v(" "),s("p",[e._v("Dans le cadre des travaux du Registre de disponibilité des taxis et de la mise en œuvre de l'ouverture des\ndonnées pour améliorer l'information dont disposent les voyageurs, l'équipe "),s("a",{attrs:{href:"https://le.taxi",target:"",rel:"noopener noreferrer"}},[e._v("le.taxi")]),e._v(" propose une\nsolution simple et structurée pour l'ouverture des données de stations de taxi en France : la Base Consolidée des\ndonnées de Station de Taxi (BCST).")]),e._v(" "),s("p",[e._v("Il s'adresse à toute agglomération qui dispose de stations de taxi sur son territoire.")]),e._v(" "),s("p",[e._v("L'équipe "),s("a",{attrs:{href:"https://le.taxi",target:"",rel:"noopener noreferrer"}},[e._v("le.taxi")]),e._v(" met à disposition des acteurs un générateur CSV conforme au schéma de données,\nainsi qu'un validateur pour les collectivités productrices de données.")]),e._v(" "),s("h2",{attrs:{id:"cadre-juridique"}},[e._v("Cadre juridique")]),e._v(" "),s("p",[e._v("Le maire (ou en cas de transfert du pouvoir de police de la circulation et du stationnement le président d'EPCI) est\ncompétent en application de l'article L.2213-3 du code général des collectivités territoriales pour réserver des\nemplacements sur la voie publique afin de faciliter la circulation et le stationnement des taxis. Ces emplacements ou\ngroupes d’emplacements sont appelés ci-après « stations de taxi ».")]),e._v(" "),s("p",[e._v("Un document produit par une collectivité territoriale recensant les données de localisation des stations de taxi sur son\nterritoire est considéré comme un « document administratif » au sens de l’article L.300-2 du code des relations entre le\npublic et l’administration. En application de l’article L. 321-1 du même code dès lors que les informations publiques\ncontenues dans ces documents sont publiées ou communiqués par la collectivité territoriale, elles « peuvent être\nutilisées par toute personne qui le souhaite à d'autres fins que celles de la mission de service public pour les besoins\nde laquelle les documents ont été produits ou reçus ».")]),e._v(" "),s("h2",{attrs:{id:"finalite"}},[e._v("Finalité")]),e._v(" "),s("p",[e._v("La base des stations de taxi permet de regrouper en un unique fichier consolidé l’ensemble des stations de taxi en\nFrance, dans un format standard et unifié. Cette standardisation des données facilite grandement le travail\nd’intégration de ces données par des services réutilisateurs.")]),e._v(" "),s("p",[e._v("La base présente plusieurs cas d’usage :")]),e._v(" "),s("ul",[s("li",[e._v("Elle permet de mettre en avant l’offre de stations de taxi d’une collectivité en permettant à des services de\nmobilité d’intégrer ces données.")]),e._v(" "),s("li",[e._v("Elle peut également servir à connaître le nombre de taxis disponibles en temps réel à une station.")])]),e._v(" "),s("p",[e._v("La base n’est pas destinée à remplacer les formats et schémas déjà utilisés en interne par les collectivités pour la\ngestion de la voirie et du mobilier urbain. Le schéma doit être vu comme un format d’export interopérable.")]),e._v(" "),s("h3",{attrs:{id:"transmission-des-donnees"}},[e._v("Transmission des données")]),e._v(" "),s("p",[e._v("Dans le but de constituer un répertoire consolidé des stations de taxi en France, les collectivités peuvent transmettre\nsystématiquement les données relatives aux stations à usage public.")]),e._v(" "),s("p",[e._v("Elles peuvent ajouter le mot-clé "),s("code",[e._v("stationstaxi")]),e._v(" lors de la publication du jeu de données sur leur espace de publication\nou directement sur data.gouv.fr.")]),e._v(" "),s("p",[e._v("En cas de mise à jour d'un fichier déjà intégré à la base consolidée, il est recommandé de prévenir l'équipe le.taxi\nafin de s'assurer que la mise à jour du fichier a bien été prise en compte et intégrée à la base consolidée.")]),e._v(" "),s("h3",{attrs:{id:"format-de-fichier"}},[e._v("Format de fichier")]),e._v(" "),s("p",[e._v("Le fichier doit être au format CSV, avec codage UTF-8. La virgule ou le point-virgule sont tous les deux acceptés comme\nséparateur. La mise entre guillemets des cellules est recommandée pour éviter toute ambiguïté avec un séparateur dans\nle contenu. L’en-tête de colonne sur la première ligne est obligatoire. Toutes les colonnes sont obligatoires ; si la\ndonnée n’est pas disponible, la colonne doit être présente et vide. L’ordre des colonnes suit l’ordre des champs listés\nci-dessous.")]),e._v(" "),s("p",[e._v("Nom du fichier : "),s("code",[e._v("stationstaxi_nom_AAAAMMJJ.csv")]),e._v(" avec "),s("code",[e._v("nom")]),e._v(" étant le nom de la collectivité productrice des données,\npar exemple : "),s("code",[e._v("stationstaxi_GrenobleAlpesMetropole_20210503.csv")]),e._v(".")]),e._v(" "),s("p",[e._v("Le format GeoJSON est également accepté pour les géographies de station plus complexes qu’un point (polygone ou\nmultipolygone). Le fichier doit être un FeatureCollection où chaque station est une Feature et les colonnes deviennent\ndes propriétés (properties) de chaque feature.")]),e._v(" "),s("h3",{attrs:{id:"fichiers-d-exemple"}},[e._v("Fichiers d'exemple")]),e._v(" "),s("p",[e._v("Vous pouvez télécharger des fichiers gabarit d'exemple :")]),e._v(" "),s("ul",[s("li",[e._v("un "),s("a",{attrs:{href:"https://github.com/openmaraude/schema-stationstaxi/raw/v0.1.1/exemple-valide.csv",target:"",rel:"noopener noreferrer"}},[e._v("fichier au format CSV")]),e._v(" ;")]),e._v(" "),s("li",[e._v("un "),s("a",{attrs:{href:"https://github.com/openmaraude/schema-stationstaxi/raw/v0.1.1/exemple-valide.xlsx",target:"",rel:"noopener noreferrer"}},[e._v("fichier au format XLSX")]),e._v(".")])]),e._v(" "),s("h3",{attrs:{id:"mises-a-jour"}},[e._v("Mises à jour")]),e._v(" "),s("p",[e._v("Les mises à jour sont effectuées à partir du fichier communiqué précédemment et en reprennent, en les modifiant le cas\néchéant, les données qui y figurent déjà.")]),e._v(" "),s("h2",{attrs:{id:"consolidation"}},[e._v("Consolidation")]),e._v(" "),s("p",[e._v("L'équipe "),s("a",{attrs:{href:"https://le.taxi",target:"",rel:"noopener noreferrer"}},[e._v("le.taxi")]),e._v(" réalise une consolidation régulière des fichiers déposée sur\n"),s("a",{attrs:{href:"htps://data.gouv.fr"}},[e._v("data.gouv.fr")]),e._v(" avec le mot-clé "),s("code",[e._v("stationstaxi")]),e._v(" respectant le format de référence décrit ici.")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);