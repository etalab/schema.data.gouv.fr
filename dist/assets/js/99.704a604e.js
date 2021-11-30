(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{592:function(e,r,t){"use strict";t.r(r);var a=t(44),n=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("MenuSchema"),e._v(" "),t("h1",{attrs:{id:"schema-itineraires-de-randonnees"}},[e._v("Schéma itinéraires de randonnées")]),e._v(" "),t("p",[e._v("Ce schéma permet de modéliser les itinéraires de randonnées afin de favoriser les échanges de données entre structures productrices et utilisatrices (communautés de communes, parcs naturels, départements...)")]),e._v(" "),t("h2",{attrs:{id:"contexte"}},[e._v("Contexte")]),e._v(" "),t("p",[e._v("Dans le cadre du programme européen "),t("a",{attrs:{href:"https://www.interreg-alcotra.eu/fr/decouvrir-alcotra/les-projets-finances/mito-modeles-integres-pour-le-tourisme-outdoor-dans-lespace",target:"",rel:"noopener noreferrer"}},[e._v("Alcotra")]),e._v(" (PITEM MITO), le Parc national des Écrins est mandaté afin de réaliser un standard d'échange de données entre les différents partenaires français et italiens. Pour cela, il a réalisé une analyse du socle commun de données permettant de définir certaines activités outdoor, dont la randonnée. Fin 2020, ce standard a été validé par les partenaires du projet Européen. La présentation de ce référentiel est accessible : https://geotrek.ecrins-parcnational.fr/ressources/presentations/2020-11-PITEM-MITO-Outdoor-Data-Presentation-socle-commun.pdf")]),e._v(" "),t("p",[e._v("Afin d'apporter une valeur ajoutée à ce projet, le Parc national souhaite travailler à partir de ce socle commun à la création d'un \"schéma de données\" concernant les itinéraires de randonnée. À terme, il est envisagé que ce schéma vienne enrichir les schémas disponibles sur le site https://schema.data.gouv.fr/, ce qui permettait de publier facilement des données standardisées et interopérables en open data, notamment sur le site data.gouv.fr.")]),e._v(" "),t("h2",{attrs:{id:"schema"}},[e._v("Schéma")]),e._v(" "),t("p",[e._v("Schéma au format "),t("a",{attrs:{href:"https://json-schema.org/",target:"",rel:"noopener noreferrer"}},[e._v("JSON Schema")]),e._v(", version "),t("a",{attrs:{href:"https://json-schema.org/specification-links.html#draft-7",target:"",rel:"noopener noreferrer"}},[t("code",[e._v("draft-07")])]),e._v(" disponible "),t("a",{attrs:{href:"https://github.com/PnX-SI/schema_randonnee/raw/v1.0.1/schema.json",target:"",rel:"noopener noreferrer"}},[e._v("ici")]),e._v(".")]),e._v(" "),t("p",[e._v("Un fichier d'exemple valide avec 10 randonnées est disponible "),t("a",{attrs:{href:"https://github.com/PnX-SI/schema_randonnee/raw/v1.0.1/exemple-valide.json",target:"",rel:"noopener noreferrer"}},[e._v("ici")]),e._v(". L'intégralité des champs du premier itinéraire sont renseignés en guise d'exemple exhaustif.")]),e._v(" "),t("h2",{attrs:{id:"validateur"}},[e._v("Validateur")]),e._v(" "),t("p",[e._v("Un script Node.js utilisant "),t("a",{attrs:{href:"https://ajv.js.org/",target:"",rel:"noopener noreferrer"}},[e._v("ajv")]),e._v(" permet de valider le fichier "),t("code",[e._v("itineraires_rando.json")]),e._v(" (à produire) contre le schéma "),t("code",[e._v("schema.json")]),e._v(" tout en utilisant les schémas GeoJSON stockés dans "),t("code",[e._v("GeoJSON_schemas/")]),e._v(". Le validateur ne fonctionne pas avec les extensions "),t("code",[e._v(".geojson")]),e._v(", mais un simple changement d'extension en "),t("code",[e._v(".json")]),e._v(" suffit.")]),e._v(" "),t("h3",{attrs:{id:"prerequis"}},[e._v("Prérequis")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Node.js 16.5.0")])]),e._v(" "),t("li",[t("code",[e._v("npm 7.20.1")])])]),e._v(" "),t("h3",{attrs:{id:"commandes"}},[e._v("Commandes")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm install ajv\nnpm install ajv-formats\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd local_validator\nnode validate_data_with_ajv.js\n")])])]),t("p",[e._v("Output:\n"),t("code",[e._v("Fichier de données valide !")])]),e._v(" "),t("h3",{attrs:{id:"github-action-workflow"}},[e._v("GitHub Action workflow")]),e._v(" "),t("p",[e._v("Un workflow permet, par exemple en cas de fork du dépôt, d'effectuer un essai de validation à chaque push de "),t("code",[e._v("schema.json")]),e._v(" ou "),t("code",[e._v("exemple-valide.json")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"geotrek"}},[e._v("Geotrek")]),e._v(" "),t("p",[e._v("Le Parc national des Écrins et le Parc national des Cévennes, entre autres, utilisent l'application "),t("a",{attrs:{href:"https://github.com/GeotrekCE",target:"",rel:"noopener noreferrer"}},[e._v("Geotrek")]),e._v(" pour gérer leurs itinéraires de randonnée et les publier sur leur site internet. Une vue PostgreSQL est disponible dans le dossier "),t("code",[e._v("geotrek")]),e._v(", elle permet de formater des itinéraires issus de Geotrek pour qu'ils soient directement compatibles avec le schéma de données.")]),e._v(" "),t("p",[e._v("Il est nécessaire d'adapter cette vue selon la construction des données Geotrek de votre structure.")]),e._v(" "),t("p",[e._v("Vue testée avec "),t("code",[e._v("PostgreSQL 10.17")]),e._v(" / "),t("code",[e._v("PostGIS 2.4.3")]),e._v(" / "),t("code",[e._v("unaccent 1.1")]),e._v(" / "),t("code",[e._v("Geotrek-admin 2.62.0")])]),e._v(" "),t("p",[e._v("Un script shell "),t("code",[e._v("geotrek/export_geojson.sh")]),e._v(" permet d'exporter les données de la vue "),t("code",[e._v("geotrek/v_treks_schema.sql")]),e._v(" au format GeoJSON avec "),t("code",[e._v("ogr2ogr (GDAL v2.2.3)")]),e._v(".")]),e._v(" "),t("p",[e._v("Pour des tests de validité plus fluides des données exportées de Geotrek, l'exécution du script "),t("code",[e._v("geotrek/export_and_validate.sh")]),e._v(" permet :")]),e._v(" "),t("ul",[t("li",[e._v("l'exécution de "),t("code",[e._v("geotrek/export_geojson.sh")])]),e._v(" "),t("li",[e._v("la copie du fichier "),t("code",[e._v("itineraires_rando.geojson")]),e._v(" et son renommage en "),t("code",[e._v("itineraires_rando.json")])]),e._v(" "),t("li",[e._v("l'exécution du script "),t("code",[e._v("local_validator/validate_data_with_ajv.js")]),e._v(" sur "),t("code",[e._v("itineraires_rando.json")]),e._v(" et l'affichage du résultat dans la console.")])]),e._v(" "),t("h2",{attrs:{id:"remerciements"}},[e._v("Remerciements")]),e._v(" "),t("p",[e._v("Nous tenons à remercier les membres du groupe de travail pour leur investissement dans l'élaboration de ce schéma :")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.adn-tourisme.fr/",target:"",rel:"noopener noreferrer"}},[e._v("ADN Tourisme")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.apidae-tourisme.com/",target:"",rel:"noopener noreferrer"}},[e._v("APIDAE Tourisme")])]),e._v(" "),t("li",[t("a",{attrs:{href:"http://www.apitux.com/",target:"",rel:"noopener noreferrer"}},[e._v("Apitux")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.april.org/",target:"",rel:"noopener noreferrer"}},[e._v("April")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.auvergnerhonealpes-tourisme.com/",target:"",rel:"noopener noreferrer"}},[e._v("Auvergne-Rhône-Alpes Tourisme")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://cotesdarmor.fr/",target:"",rel:"noopener noreferrer"}},[e._v("Conseil départemental des Côtes d'Armor")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.hautes-alpes.fr/",target:"",rel:"noopener noreferrer"}},[e._v("Conseil départemental des Hautes-Alpes")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.vaucluse.fr/",target:"",rel:"noopener noreferrer"}},[e._v("Conseil départemental du Vaucluse")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.datatourisme.gouv.fr/",target:"",rel:"noopener noreferrer"}},[e._v("DATAtourisme")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.etalab.gouv.fr/",target:"",rel:"noopener noreferrer"}},[e._v("Etalab")]),e._v(" / "),t("a",{attrs:{href:"https://www.numerique.gouv.fr/",target:"",rel:"noopener noreferrer"}},[e._v("DINUM")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.ign.fr/",target:"",rel:"noopener noreferrer"}},[e._v("IGN")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.ecrins-parcnational.fr/",target:"",rel:"noopener noreferrer"}},[e._v("Parc national des Écrins")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.cevennes-parcnational.fr/",target:"",rel:"noopener noreferrer"}},[e._v("Parc national des Cévennes")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.parcduluberon.fr/",target:"",rel:"noopener noreferrer"}},[e._v("Parc naturel régional du Luberon")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.regione.liguria.it/",target:"",rel:"noopener noreferrer"}},[e._v("Région Ligurie")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.maregionsud.fr/",target:"",rel:"noopener noreferrer"}},[e._v("Région SUD")])])])],1)}),[],!1,null,null,null);r.default=n.exports}}]);