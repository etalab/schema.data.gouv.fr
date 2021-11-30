(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{728:function(e,r,t){"use strict";t.r(r);var a=t(44),i=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("MenuSchema"),e._v(" "),t("h1",{attrs:{id:"schema-des-lieux-de-covoiturage"}},[e._v("Schéma des lieux de covoiturage")]),e._v(" "),t("p",[e._v("Ce schéma permet de modéliser des lieux pertinents (aires de covoiturage, parkings, délaissés routiers, etc) pour commencer ou terminer un trajet en covoiturage. Ces lieux de covoiturage ne concernent que les offres qui permettent de stationner gratuitement.")]),e._v(" "),t("h2",{attrs:{id:"contexte"}},[e._v("Contexte")]),e._v(" "),t("p",[e._v("Un "),t("a",{attrs:{href:"https://www.data.gouv.fr/fr/datasets/aires-de-covoiturage-en-france",target:"",rel:"noopener noreferrer"}},[e._v("fichier national")]),e._v(" décrivant les aires de covoiturage de 70 départements a été consolidé par BlaBlaCar en 2018 à partir des fichiers disponibles sur data.gouv.fr et sur les différents sites des départements français.")]),e._v(" "),t("p",[e._v("La Fabrique des Mobilités a également ouvert un fichier relatif à des lieux de rendez-vous de covoiturage (grande variété de points, fichier non consolidé), disponible "),t("a",{attrs:{href:"https://www.data.gouv.fr/fr/datasets/base-de-donnees-commune-des-lieux-et-aires-de-covoiturage/",target:"",rel:"noopener noreferrer"}},[e._v("sur data.gouv.fr")]),e._v(", notamment grâce à un formulaire ouvert au grand public permettant de déclarer des points de rencontre pertinents.")]),e._v(" "),t("p",[e._v("En 2019, transport.data.gouv.fr, Open Data France et le Ministère chargé des transports proposent un schéma amélioré pour garantir la disponibilité d'une base nationale consolidée qui puisse être facilement mise à jour.")]),e._v(" "),t("h3",{attrs:{id:"cadrage-juridique"}},[e._v("Cadrage juridique")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("La "),t("a",{attrs:{href:"https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000028526298",target:"",rel:"noopener noreferrer"}},[e._v("loi n° 2014-58 du 27 janvier 2014")]),e._v(" de modernisation de l’action publique territoriale et l’affirmation des métropoles (MAPTAM) acte la transformation des autorités organisatrices des transports urbains (AOTU) en autorités organisatrices de la mobilité (AOM) et l'extension de leurs compétences au champ des usages partagés de l'automobile (notamment le covoiturage) et des modes actifs.")])]),e._v(" "),t("li",[t("p",[e._v("L’article 52 de la loi MATPAM donne, pour la première fois, une définition du covoiturage. Cette définition a été précisée dans le cadre de la loi du 17 août 2015 relative à la transition énergétique pour une croissance verte (TECV).")])])]),e._v(" "),t("h2",{attrs:{id:"finalite"}},[e._v("Finalité")]),e._v(" "),t("p",[e._v("Les lieux de covoiturage sont des données précieuses, notamment pour les application de covoiturage qui peuvent ainsi assurer à leurs usagers une information fiable sur les lieux où ils peuvent s'arrêter et stationner en toute sécurité.")]),e._v(" "),t("h2",{attrs:{id:"transmission-des-donnees"}},[e._v("Transmission des données")]),e._v(" "),t("p",[e._v("Dans le but de constituer un répertoire national des lieux de covoiturage, ouvert et accessible à tous, les collectivités peuvent transmettre systématiquement, sous forme de tableau mis à jour, les données relatives aux lieux qu'elles considèrent pertinents pour les covoitureurs.")]),e._v(" "),t("p",[e._v("Elles peuvent ajouter le mot-clef "),t("code",[e._v("covoiturage")]),e._v(" lors de la publication du jeu de données sur leur espace de publication ou directement sur data.gouv.fr")]),e._v(" "),t("h3",{attrs:{id:"format-des-fichiers"}},[e._v("Format des fichiers")]),e._v(" "),t("p",[e._v("Le fichier doit être encodé en UTF-8 et utiliser le point-virgule comme séparateur de colonnes. L'en-tête de colonne sur la première ligne est obligatoire. Tous les champs sont obligatoires ; si la donnée n'est pas disponible, la colonne doit être présente et vide.")]),e._v(" "),t("p",[e._v("Nom du fichier : "),t("code",[e._v("AAAAMMJJ_idproducteur_lieuxcovoit.csv")]),e._v(" où "),t("code",[e._v("idproducteur")]),e._v(" est le SIREN de la collectivité productrice des données, par exemple pour le département de l'Ain "),t("code",[e._v("20191013_220100010_lieuxcovoit.csv")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"fichiers-d-exemple"}},[e._v("Fichiers d'exemple")]),e._v(" "),t("p",[e._v("Nous mettons à disposition des fichiers d'exemple qui peuvent servir de base pour renseigner vos lieux de covoiturage.")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/etalab/schema-lieux-covoiturage/raw/v0.1.2/exemple-valide.csv",target:"",rel:"noopener noreferrer"}},[e._v("Télécharger un fichier exemple au format CSV")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/etalab/schema-lieux-covoiturage/raw/v0.1.2/exemple-valide.xls",target:"",rel:"noopener noreferrer"}},[e._v("Télécharger un fichier exemple au format Excel")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/etalab/schema-lieux-covoiturage/raw/v0.1.2/exemple-invalide.csv",target:"",rel:"noopener noreferrer"}},[e._v("Télécharger un fichier d'exemple invalide")]),e._v(" contenant des erreurs dans le formatage des dates et une inversion des coordonnées géographiques latitude/longitude")])]),e._v(" "),t("h3",{attrs:{id:"mises-a-jour"}},[e._v("Mises à jour")]),e._v(" "),t("p",[e._v("Les mises à jour sont effectuées à partir du fichier communiqué précédemment et en reprennent, en les modifiant le cas échéant, les données qui y figurent déjà.")]),e._v(" "),t("h2",{attrs:{id:"consolidation"}},[e._v("Consolidation")]),e._v(" "),t("p",[e._v("Le Point d'accès national aux données de transport ("),t("a",{attrs:{href:"https://transport.data.gouv.fr",target:"",rel:"noopener noreferrer"}},[e._v("transport.data.gouv.fr")]),e._v(") réalise une consolidation régulière des fichiers déposés sur "),t("a",{attrs:{href:"https://data.gouv.fr",target:"",rel:"noopener noreferrer"}},[e._v("data.gouv.fr")]),e._v(" avec le mot-clé "),t("code",[e._v("covoiturage")]),e._v(" respectant le format de référence décrit ici.")]),e._v(" "),t("h2",{attrs:{id:"outils"}},[e._v("Outils")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://validata.etalab.studio/table-schema?schema_name=schema-datagouv-fr.etalab/schema-lieux-covoiturage",target:"",rel:"noopener noreferrer"}},[e._v("Validateur de fichiers CSV")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://forms.validata.etalab.studio/?schema=etalab%2Fschema-lieux-covoiturage",target:"",rel:"noopener noreferrer"}},[e._v("Formulaire de création de données valides")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/etalab/schema-lieux-covoiturage/raw/master/exemple-valide.xls",target:"",rel:"noopener noreferrer"}},[e._v("Télécharger un fichier gabarit au format XLS")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/etalab/schema-lieux-covoiturage/raw/master/exemple-valide.csv",target:"",rel:"noopener noreferrer"}},[e._v("Télécharger un fichier gabarit au format CSV")])])]),e._v(" "),t("h2",{attrs:{id:"en-savoir-plus"}},[e._v("En savoir plus")]),e._v(" "),t("ul",[t("li",[e._v("Le Ministère de la Transition écologique et solidaire rappelle sur "),t("a",{attrs:{href:"https://www.ecologique-solidaire.gouv.fr/covoiturage-en-france",target:"",rel:"noopener noreferrer"}},[e._v("cette page")]),e._v(" le cadre de cette pratique de mobilité.")]),e._v(" "),t("li",[e._v("Page du "),t("a",{attrs:{href:"https://wiki.lafabriquedesmobilites.fr/wiki/Base_de_donn%C3%A9e_commune_des_lieux_de_covoiturage",target:"",rel:"noopener noreferrer"}},[e._v("wiki de la Fabrique des mobilités")]),e._v(" dédiée au sujet du covoiturage")])])],1)}),[],!1,null,null,null);r.default=i.exports}}]);