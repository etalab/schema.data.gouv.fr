(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{711:function(e,r,t){"use strict";t.r(r);var a=t(44),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("MenuSchema"),e._v(" "),t("h1",{attrs:{id:"infrastructures-de-recharge-pour-vehicules-electriques"}},[e._v("Infrastructures de recharge pour véhicules électriques")]),e._v(" "),t("p",[e._v("Spécification du fichier d'échange relatif aux données concernant la localisation géographique et les caractéristiques techniques des stations et des points de recharge pour véhicules électriques")]),e._v(" "),t("h2",{attrs:{id:"contexte"}},[e._v("Contexte")]),e._v(" "),t("p",[e._v("Dans le but de constituer un répertoire national des Infrastructures de recharge pour véhicules électriques (IRVE), ouvert et accessible à tous, les collectivités locales porteuses d'un projet d'installation d'IRVE doivent, au fur et à mesure de la mise en service des stations, publier sur la plateforme data.gouv.fr les données statiques relatives à la localisation et aux caractéristiques techniques de ces installations selon les modalités définies dans "),t("a",{attrs:{href:"https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043475363",target:"",rel:"noopener noreferrer"}},[e._v("l'arrêté du 4 mai 2021")]),e._v(".")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Documents de cadrage juridique")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043475363",target:"",rel:"noopener noreferrer"}},[e._v("Décret n° 2021-546 du 4 mai 2021 portant modification du décret n° 2017-26 du 12 janvier 2017 relatif aux infrastructures de recharge pour véhicules électriques et portant diverses mesures de transposition de la directive 2014/94/UE du Parlement européen et du Conseil du 22 octobre 2014 sur le déploiement d'une infrastructure pour carburants alternatifs")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043475441",target:"",rel:"noopener noreferrer"}},[e._v("Arrêté du 4 mai 2021 relatif aux données concernant la localisation géographique et les caractéristiques techniques des stations et des points de recharge pour véhicules électriques")])])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Documents de cadrage technique")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.data.gouv.fr/fr/datasets/fichier-exemple-stations-de-recharge-de-vehicules-electriques/",target:"",rel:"noopener noreferrer"}},[e._v("Fichier de consolidation des stations de recharge de véhicules électriques sur data.gouv.fr")])]),e._v(" "),t("li",[t("a",{attrs:{href:"http://www.afirev.fr/fr/informations-generales/",target:"",rel:"noopener noreferrer"}},[e._v("Définition et structure des identifiants attribués par l'Association Française pour l'Itinérance de la Recharge Electrique des Véhicules (AFIREV)")])])])])]),e._v(" "),t("h2",{attrs:{id:"creation-d-un-fichier-de-donnees-conforme"}},[e._v("Création d'un fichier de données conforme")]),e._v(" "),t("p",[e._v("Les données collectées doivent respecter un formalisme particulier (schéma de données) décrit sur "),t("a",{attrs:{href:"https://schema.data.gouv.fr/etalab/schema-irve/latest/documentation.html",target:"",rel:"noopener noreferrer"}},[e._v("la section documentation")]),e._v(" de cette page.")]),e._v(" "),t("p",[e._v("Les données sont à remplir au format CSV, encodage UTF-8.")]),e._v(" "),t("p",[e._v("Plusieurs solutions existent pour générer ce fichier CSV.")]),e._v(" "),t("h2",{attrs:{id:"utilisation-de-notre-outil-d-aide-a-la-saisie"}},[e._v("Utilisation de notre outil d'aide à la saisie")]),e._v(" "),t("p",[e._v("Pour être guidé pas à pas, merci de vous rendre sur la "),t("a",{attrs:{href:"https://doc.transport.data.gouv.fr/producteurs/infrastructures-de-recharge-de-vehicules-electriques-irve",target:"",rel:"noopener noreferrer"}},[e._v("documentation officielle")]),e._v(" de transport.data.gouv.fr, Point d'accès national aux données de transport.")]),e._v(" "),t("p",[e._v("Pour faciliter le remplissage des données, Etalab met à disposition un générateur CSV conforme au schéma de données, vous permettant de remplir les différents champs demandés. Cet outil vous permet de vous assurer que les données que vous remplissez sont au bon format. Pour l'utiliser, rendez-vous sur "),t("a",{attrs:{href:"https://publier.etalab.studio/select?schema=etalab%2Fschema-irve",target:"",rel:"noopener noreferrer"}},[e._v("publier.etalab.studio")]),e._v(", vous pourrez alors publier votre fichier à partir :")]),e._v(" "),t("ul",[t("li",[e._v("d'un fichier csv déjà existant. (vous pouvez partir de "),t("a",{attrs:{href:"https://www.data.gouv.fr/fr/datasets/fichier-exemple-stations-de-recharge-de-vehicules-electriques/",target:"",rel:"noopener noreferrer"}},[e._v("ce fichier exemple")]),e._v(".")]),e._v(" "),t("li",[e._v("d'un formulaire")]),e._v(" "),t("li",[e._v("d'un tableur (encore en expérimentation)")])]),e._v(" "),t("p",[e._v("Une fois vos données chargées ou remplies, un formulaire vous proposera de les publier sur data.gouv.fr.")]),e._v(" "),t("h2",{attrs:{id:"consolidation"}},[e._v("Consolidation")]),e._v(" "),t("p",[e._v("Etalab réalise une consolidation des jeux de données IRVE déposés sur data.gouv.fr. Le code est "),t("a",{attrs:{href:"https://github.com/etalab/notebooks/tree/master/irve-v2",target:"",rel:"noopener noreferrer"}},[e._v("disponible ici")]),e._v(". Le fichier en résultant est "),t("a",{attrs:{href:"https://www.data.gouv.fr/fr/datasets/5448d3e0c751df01f85d0572",target:"",rel:"noopener noreferrer"}},[e._v("publié ici sur data.gouv.fr")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"voir-aussi"}},[e._v("Voir aussi")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.data.gouv.fr/fr/datasets/fichier-exemple-stations-de-recharge-de-vehicules-electriques/",target:"",rel:"noopener noreferrer"}},[e._v("Fichier gabarit à télécharger au format csv")]),e._v(" (proposé par Etalab)")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://scdl.opendatafrance.net/docs/templates/irve.xlsx",target:"",rel:"noopener noreferrer"}},[e._v("Fichier gabarit à télécharger au format xlsx")]),e._v(" (généré automatiquement à partir du schéma)")])]),e._v(" "),t("p",[e._v("Pour poser une question, commenter, faire un retour d’usage ou contribuer à l’amélioration du modèle de données, vous pouvez :")]),e._v(" "),t("ul",[t("li",[e._v("adresser un message à "),t("a",{attrs:{href:"mailto:validation@data.gouv.fr?subject=IRVE"}},[e._v("validation@data.gouv.fr")])]),e._v(" "),t("li",[e._v("ouvrir un ticket sur le "),t("a",{attrs:{href:"https://github.com/etalab/schema-irve/issues/new",target:"",rel:"noopener noreferrer"}},[e._v("dépôt GitHub du schéma")])])])],1)}),[],!1,null,null,null);r.default=s.exports}}]);