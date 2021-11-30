(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{819:function(e,s,i){"use strict";i.r(s);var t=i(44),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("MenuSchema"),e._v(" "),i("h1",{attrs:{id:"schema-de-donnees-pour-les-zones-a-faibles-emissions"}},[e._v("Schéma de données pour les Zones à Faibles Emissions")]),e._v(" "),i("p",[e._v("Ce schéma permet de modéliser les règles de limitation de circulation sur une zone concernant différents types de véhicules (véhicules particuliers, utilitaires, poids lourds...). Il permet également de préciser des exceptions sur certains axes routiers ou la Zone à Faible Emission a des règles différentes.")]),e._v(" "),i("h2",{attrs:{id:"contexte"}},[e._v("Contexte")]),e._v(" "),i("p",[e._v("Dans le cadre des travaux de l’équipe du Point d’accès national et de la mise en oeuvre de l’ouverture des données pour améliorer l’information dont disposent les voyageurs, l’équipe de transport.data.gouv.fr propose une solution simple et structurée pour l’ouverture des données concernant les Zones à Faibles Emissions : la Base Nationale des Zones à Faibles Emissions (BNZFE).")]),e._v(" "),i("p",[e._v("Le schéma de la base de données a été co-construit avec les collectivités, leurs services SIG et avec les futurs réutilisateurs de ces données. Des ateliers avec ces acteurs et un atelier ouvert (le 08/04/2021) ont permis sa production. Aujourd’hui disponible en version 0.7.1, il sera mis-à-jour régulièrement.")]),e._v(" "),i("h2",{attrs:{id:"cadre-juridique"}},[e._v("Cadre juridique")]),e._v(" "),i("p",[e._v("L’ouverture des données sur les Zones à Faibles Emissions est une obligation légale, définie par la Loi pour une République Numérique (n° 2016-1321 du 7 octobre 2016) concernant la mise à disposition par défaut des données administratives.")]),e._v(" "),i("h2",{attrs:{id:"finalite"}},[e._v("Finalité")]),e._v(" "),i("p",[e._v("Afin de faciliter l’intégration des informations relatives aux Zones à Faibles Emission dans des applications de mobilité, un schéma de données a été défini afin d’assurer une harmonisation de ces données sur l’ensemble du territoire. Ce schéma définit des informations indispensables et complémentaires à fournir par le producteur. Cette distinction a été mise en place pour ne pas pénaliser les petits producteurs de données, et définit un standard minimal de complétude des données. Il est toutefois demandé aux producteurs de données de compléter le schéma avec le plus grand niveau de détail possible, afin de transmettre une information plus riche à l’usager final.\nLa base présente plusieurs cas d’usage")]),e._v(" "),i("ul",[i("li",[e._v("elle recense l'ensemble des Zones à Faibles Emission du territoire français en permettant à des services de calcul d’itinéraire d’intégrer ces données pour indiquer aux automobilistes s'ils peuvent circuler ou non sur certains tronçons routiers.")]),e._v(" "),i("li",[e._v("les données peuvent également être utilisées par des observatoires nationaux ou européens de l'implémentation de ce dispositif visant à améliorer la qualité de l'air des noeuds urbains.")])]),e._v(" "),i("p",[e._v("Le fichier précise notamment :")]),e._v(" "),i("ul",[i("li",[e._v("l'identifiant d'une aire concernée par une réglementation ZFE ou l'identifiant d'un tronçon routier concerné par une règle exceptionnelle ;")]),e._v(" "),i("li",[e._v("la date de mise en place du dispositif et la date à laquelle la réglementation prend fin ;")]),e._v(" "),i("li",[e._v("la catégorie de conducteurs concernée par le dispositif (personne morale et/ou physique) ;")]),e._v(" "),i("li",[e._v("les vignettes CRITAIR autorisées par type de véhicule (véhicule particuliers, utilitaires, poids lourds, autobus, deux roues, taxis...) ;")]),e._v(" "),i("li",[e._v("les horaires d'application par type de véhicules (véhicule particuliers, utilitaires, poids lourds, autobus, deux roues, taxis...) ;")]),e._v(" "),i("li",[e._v("l'arrêté associé ;")]),e._v(" "),i("li",[e._v("le site d'information associé à la réglementation.")])]),e._v(" "),i("h2",{attrs:{id:"format-de-fichier"}},[e._v("Format de fichier")]),e._v(" "),i("p",[e._v("Les jeux de données seront publiés au format GeoJSON encodé en UTF8. Certains champs sont obligatoires et d'autres optionnels. Les champs obligatoires doivent être complétés. Les champs optionnels peuvent être vides si la donnée n’est pas disponible. La colonne doit toutefois être présente.\nCe schéma de données permet de produire un fichier décrivant les aires réglementées et un second fichier optionnel décrivant les tronçons routiers spéciaux. Leur articulation est expliquée dans la partie Mode d'emploi.")]),e._v(" "),i("h2",{attrs:{id:"referentiel-geographique"}},[e._v("Référentiel géographique")]),e._v(" "),i("p",[e._v("Le référentiel à suivre pour la production des données est le Référentiel Grande Echelle de l'IGN. Le système de projection retenu est le WGS84 comme le recommande le standard GeoJSON.\nLes tronçons routiers exceptionnels doivent être extraits de la couche TRONCON_DE_ROUTE de la BD Topo de l'IGN. Si cela présente des difficultés merci de contacter contact@transport.beta.gouv.fr")]),e._v(" "),i("h2",{attrs:{id:"publication"}},[e._v("Publication")]),e._v(" "),i("p",[e._v('Dans le but de maintenir à jour un répertoire consolidé des Zones à Faibles Emissions en France, les collectivités sont invitées à transmettre systématiquement les données relatives aux ZFE sur leur territoire.\nElles peuvent ajouter le mot-clef "zone-faibles-emissions" ou "zfe" lors de la publication du jeu de données dans leur espace de publication (portail local ou régional) ou directement sur data.gouv.fr.\nLes producteurs pourront :')]),e._v(" "),i("ul",[i("li",[e._v("publier directement sur data.gouv.fr ;")]),e._v(" "),i("li",[e._v("publier sur un portail local ou régional et s'assurer que les données publiées sont bien moissonnées et référencées sur data.gouv.fr.")])]),e._v(" "),i("p",[e._v("Nous préconisons aux producteurs de données de publier leurs fichiers concernant les zones avec la règle de nommage suivante : "),i("code",[e._v("zfe_zone_nom.geojson")]),e._v(" avec nom étant le nom de la collectivité productrice des données, par exemple "),i("code",[e._v("zfe_zone_grenoble.geojson")]),e._v(".\nPour les fichiers concernant les voies spéciales : "),i("code",[e._v("zfe_voie_speciale_nom.geojson")]),e._v(", avec nom étant le nom de la collectivité productrice des données, par exemple "),i("code",[e._v("zfe_voie_speciale_grenoble.geojson")]),e._v(".")]),e._v(" "),i("p",[e._v("En cas de mise à jour d’un fichier déjà intégré à la base consolidée, il est recommandé de prévenir l’équipe transport.data.gouv.fr qui s’assurera de l'actualisation du fichier en question et de son intégration dans la base consolidée.")]),e._v(" "),i("h2",{attrs:{id:"consolidation"}},[e._v("Consolidation")]),e._v(" "),i("p",[e._v("Le base nationale des ZFE sera construite par l'assemblage (ou consolidation) de l'ensemble des fichiers locaux publiés sur data.gouv.fr. Deux fichiers seront publiés : un premier décrivant les aires concernées par une Zone à Fiable Emission et un second décrivant les voies spéciales dont les règles sont différentes.")]),e._v(" "),i("h2",{attrs:{id:"mise-a-jour"}},[e._v("Mise-à-jour")]),e._v(" "),i("p",[e._v('La consolidation de la base sera effectuée en continu par transport.data.gouv.fr à partir des fichiers publiés sur data.gouv avec le tag "zfe" ou "zone-faibles-emissions" par les producteurs. De nouvelles versions seront publiées lorsque de nouvelles ZFE seront recensées ou mises-à-jour par les producteurs. Cette mise à jour se fait à partir du fichier communiqué précédemment et en reprenant, en les modifiant le cas échéant, les données existantes. Le fichier principal du dataset constitue ainsi systématiquement la dernière mise-à-jour.')]),e._v(" "),i("h2",{attrs:{id:"mode-d-emploi"}},[e._v("Mode d'emploi")]),e._v(" "),i("p",[e._v("Comme expliqué ce schéma de données permet de décrire des aires réglementées et des voies exceptionnelles dont les règles sont différentes des zones dont elles font pourtant partie. Les règles affectant les tronçons routiers priment donc sur les règles affectant une zone.")]),e._v(" "),i("h2",{attrs:{id:"conditions-d-utilisation"}},[e._v("Conditions d’utilisation")]),e._v(" "),i("p",[e._v("Comme indiqué dans les métadonnées, le fichier et ses mises-à-jour sont distribués sous la Licence Ouverte Etalab 2.0. Cela signifie que vous pouvez télécharger librement cette base, la réutiliser, la modifier, l’utiliser commercialement, etc, tant que vous en mentionnez la source (par exemple dans les mentions légales de votre application).\nNous tenons à remercier les membres du groupe de travail pour leur investissement dans l'élaboration de ce schéma.")]),e._v(" "),i("h3",{attrs:{id:"fichiers-disponibles"}},[e._v("Fichiers disponibles")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/etalab/schema-zfe/blob/master/CHANGELOG.md",target:"",rel:"noopener noreferrer"}},[i("code",[e._v("CHANGELOG.md")])]),e._v(" contient la liste des changements entre les différentes versions du schéma ;")]),e._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/etalab/schema-zfe/blob/master/exemple-valide-zone.geojson",target:"",rel:"noopener noreferrer"}},[i("code",[e._v("exemple-valide-zone.geojson")])]),e._v(" est un fichier GeoJSON d'exemple conforme décrivant une aire par rapport au schéma décrit dans "),i("code",[e._v("schema.json")]),e._v("  ;")]),e._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/etalab/schema-zfe/blob/master/exemple-valide-voie-speciale.geojson",target:"",rel:"noopener noreferrer"}},[i("code",[e._v("exemple-valide-voie-speciale.geojson")])]),e._v(" est un fichier GeoJSON d'exemple conforme décrivant une voie spéciale par rapport au schéma décrit dans "),i("code",[e._v("schema.json")]),e._v(" ;")]),e._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/etalab/schema-zfe/blob/master/LICENSE.md",target:"",rel:"noopener noreferrer"}},[i("code",[e._v("LICENSE.md")])]),e._v(" est le fichier de licence du dépôt ;")]),e._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/etalab/schema-zfe/blob/master/README.md",target:"",rel:"noopener noreferrer"}},[i("code",[e._v("README.md")])]),e._v(" est le fichier que vous lisez actuellement ;")]),e._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/etalab/schema-zfe/blob/master/requirements.txt",target:"",rel:"noopener noreferrer"}},[i("code",[e._v("requirements.txt")])]),e._v(" liste les dépendances Python nécessaires pour effectuer des tests en intégration continue sur le dépôt ;")]),e._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/etalab/schema-zfe/blob/master/schema.json",target:"",rel:"noopener noreferrer"}},[i("code",[e._v("schema.json")])]),e._v(" est le schéma au format "),i("a",{attrs:{href:"https://json-schema.org/",target:"",rel:"noopener noreferrer"}},[e._v("JSON Schema")]),e._v(".")])]),e._v(" "),i("h3",{attrs:{id:"integration-continue"}},[e._v("Intégration continue")]),e._v(" "),i("p",[e._v("Ce dépôt est configuré pour utiliser de l'intégration continue, si vous utilisez GitHub. À chaque commit, une suite de tests sera lancée via "),i("a",{attrs:{href:"https://github.com/features/actions",target:"",rel:"noopener noreferrer"}},[e._v("GitHub Actions")]),e._v(" afin de vérifier :")]),e._v(" "),i("ul",[i("li",[e._v("que votre schéma est valide à la spécification Table Schema ;")]),e._v(" "),i("li",[e._v("que vos fichiers d'exemples sont conformes au schéma.")])]),e._v(" "),i("p",[e._v("Vous pouvez consulter la configuration utilisée dans "),i("a",{attrs:{href:".github/workflows/test.yml"}},[i("code",[e._v(".github/workflows/test.yml")])]),e._v(".")])],1)}),[],!1,null,null,null);s.default=r.exports}}]);