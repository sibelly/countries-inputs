const data = [
	{
		"name": "Afghanistan",
		"flag": "🇦🇫",
		"code": "AFG",
		"dial_code": "+93"
	},
	{
		"name": "Åland Islands",
		"flag": "🇦🇽",
		"code": "ALA",
		"dial_code": "+358"
	},
	{
		"name": "Albania",
		"flag": "🇦🇱",
		"code": "ALB",
		"dial_code": "+355"
	},
	{
		"name": "Algeria",
		"flag": "🇩🇿",
		"code": "DZA",
		"dial_code": "+213"
	},
	{
		"name": "Andorra",
		"flag": "🇦🇩",
		"code": "AND",
		"dial_code": "+376"
	},
	{
		"name": "Angola",
		"flag": "🇦🇴",
		"code": "AGO",
		"dial_code": "+244"
	},
	{
		"name": "Anguilla",
		"flag": "🇦🇮",
		"code": "AIA",
		"dial_code": "+1264"
	},
	{
		"name": "Antarctica",
		"flag": "🇦🇶",
		"code": "ATA",
		"dial_code": "+672"
	},
	{
		"name": "Antigua and Barbuda",
		"flag": "🇦🇬",
		"code": "ATG",
		"dial_code": "+1268"
	},
	{
		"name": "Argentina",
		"flag": "🇦🇷",
		"code": "ARG",
		"dial_code": "+54"
	},
	{
		"name": "Armenia",
		"flag": "🇦🇲",
		"code": "ARM",
		"dial_code": "+374"
	},
	{
		"name": "Aruba",
		"flag": "🇦🇼",
		"code": "ABW",
		"dial_code": "+297"
	},
	{
		"name": "Australia",
		"flag": "🇦🇺",
		"code": "AUS",
		"dial_code": "+61"
	},
	{
		"name": "Austria",
		"flag": "🇦🇹",
		"code": "AUT",
		"dial_code": "+43"
	},
	{
		"name": "Azerbaijan",
		"flag": "🇦🇿",
		"code": "AZE",
		"dial_code": "+994"
	},
	{
		"name": "Bahamas",
		"flag": "🇧🇸",
		"code": "BHS",
		"dial_code": "+1242"
	},
	{
		"name": "Bahrain",
		"flag": "🇧🇭",
		"code": "BHR",
		"dial_code": "+973"
	},
	{
		"name": "Bangladesh",
		"flag": "🇧🇩",
		"code": "BGD",
		"dial_code": "+880"
	},
	{
		"name": "Barbados",
		"flag": "🇧🇧",
		"code": "BRB",
		"dial_code": "+1246"
	},
	{
		"name": "Belarus",
		"flag": "🇧🇾",
		"code": "BLR",
		"dial_code": "+375"
	},
	{
		"name": "Belgium",
		"flag": "🇧🇪",
		"code": "BEL",
		"dial_code": "+32"
	},
	{
		"name": "Belize",
		"flag": "🇧🇿",
		"code": "BLZ",
		"dial_code": "+501"
	},
	{
		"name": "Benin",
		"flag": "🇧🇯",
		"code": "BEN",
		"dial_code": "+229"
	},
	{
		"name": "Bermuda",
		"flag": "🇧🇲",
		"code": "BMU",
		"dial_code": "+1441"
	},
	{
		"name": "Bhutan",
		"flag": "🇧🇹",
		"code": "BTN",
		"dial_code": "+975"
	},
	{
		"name": "Bolivia, Plurinational State of bolivia",
		"flag": "🇧🇴",
		"code": "BOL",
		"dial_code": "+591"
	},
	//<option value="BES">Bonaire, Sint Eustatius and Saba</option>
	{
		"name": "Bosnia and Herzegovina",
		"flag": "🇧🇦",
		"code": "BIH",
		"dial_code": "+387"
	},
	{
		"name": "Botswana",
		"flag": "🇧🇼",
		"code": "BWA",
		"dial_code": "+267"
	},
	{
		"name": "Bouvet Island",
		"flag": "🇧🇻",
		"code": "BVT",
		"dial_code": "+47"
	},
	{
		"name": "Brazil",
		"flag": "🇧🇷",
		"code": "BRA",
		"dial_code": "+55"
	},
	{
		"name": "British Indian Ocean Territory",
		"flag": "🇮🇴",
		"code": "IOT",
		"dial_code": "+246"
	},
	{
		"name": "Brunei Darussalam",
		"flag": "🇧🇳",
		"code": "BRN",
		"dial_code": "+673"
	},
	{
		"name": "Bulgaria",
		"flag": "🇧🇬",
		"code": "BGR",
		"dial_code": "+359"
	},
	{
		"name": "Burkina Faso",
		"flag": "🇧🇫",
		"code": "BFA",
		"dial_code": "+226"
	},
	{
		"name": "Burundi",
		"flag": "🇧🇮",
		"code": "BDI",
		"dial_code": "+257"
	},
	{
		"name": "Cambodia",
		"flag": "🇰🇭",
		"code": "KHM",
		"dial_code": "+855"
	},
	{
		"name": "Cameroon",
		"flag": "🇨🇲",
		"code": "CMR",
		"dial_code": "+237"
	},
	// {
	// 	"name": "Canada",
	// 	"flag": "🇨🇦",
	// 	"code": "CAN",
	// 	"dial_code": "+1"
	// },
	{
		"name": "Cape Verde",
		"flag": "🇨🇻",
		"code": "CPV",
		"dial_code": "+238"
	},
	{
		"name": "Cayman Islands",
		"flag": "🇰🇾",
		"code": "CYM",
		"dial_code": "+345"
	},
	{
		"name": "Central African Republic",
		"flag": "🇨🇫",
		"code": "CAF",
		"dial_code": "+236"
	},
	{
		"name": "Chad",
		"flag": "🇹🇩",
		"code": "TCD",
		"dial_code": "+235"
	},
	{
		"name": "Chile",
		"flag": "🇨🇱",
		"code": "CHL",
		"dial_code": "+56"
	},
	// {
	// 	"name": "China",
	// 	"flag": "🇨🇳",
	// 	"code": "CHN",
	// 	"dial_code": "+86"
	// },
	{
		"name": "Christmas Island",
		"flag": "🇨🇽",
		"code": "CXR",
		"dial_code": "+61"
	},
	{
		"name": "Cocos (Keeling) Islands",
		"flag": "🇨🇨",
		"code": "CCK",
		"dial_code": "+61"
	},
	{
		"name": "Colombia",
		"flag": "🇨🇴",
		"code": "COL",
		"dial_code": "+57"
	},
	{
		"name": "Comoros",
		"flag": "🇰🇲",
		"code": "COM",
		"dial_code": "+269"
	},
	{
		"name": "Congo",
		"flag": "🇨🇬",
		"code": "CG",
		"dial_code": "+242"
	},
	{
		"name": "Congo, The Democratic Republic of the Congo",
		"flag": "🇨🇩",
		"code": "CD",
		"dial_code": "+243"
	},
	{
		"name": "Cook Islands",
		"flag": "🇨🇰",
		"code": "COK",
		"dial_code": "+682"
	},
	// {
	// 	"name": "Costa Rica",
	// 	"flag": "🇨🇷",
	// 	"code": "CR",
	// 	"dial_code": "+506"
	// },
	{
		"name": "Cote d'Ivoire",
		"flag": "🇨🇮",
		"code": "CIV",
		"dial_code": "+225"
	},
	{
		"name": "Croatia",
		"flag": "🇭🇷",
		"code": "HRV",
		"dial_code": "+385"
	},
	{
		"name": "Cuba",
		"flag": "🇨🇺",
		"code": "CUB",
		"dial_code": "+53"
	},
	{
		"name": "Cyprus",
		"flag": "🇨🇾",
		"code": "CYP",
		"dial_code": "+357"
	},
	{
		"name": "Czech Republic",
		"flag": "🇨🇿",
		"code": "CZE",
		"dial_code": "+420"
	},
	{
		"name": "Denmark",
		"flag": "🇩🇰",
		"code": "DNK",
		"dial_code": "+45"
	},
	{
		"name": "Djibouti",
		"flag": "🇩🇯",
		"code": "DJI",
		"dial_code": "+253"
	},
	{
		"name": "Dominica",
		"flag": "🇩🇲",
		"code": "DMA",
		"dial_code": "+1767"
	},
	{
		"name": "Dominican Republic",
		"flag": "🇩🇴",
		"code": "DOM",
		"dial_code": "+1849"
	},
	// {
	// 	"name": "Ecuador",
	// 	"flag": "🇪🇨",
	// 	"code": "EC",
	// 	"dial_code": "+593"
	// },
	{
		"name": "Egypt",
		"flag": "🇪🇬",
		"code": "EGY",
		"dial_code": "+20"
	},
	// {
	// 	"name": "El Salvador",
	// 	"flag": "🇸🇻",
	// 	"code": "SLV",
	// 	"dial_code": "+503"
	// },
	{
		"name": "Equatorial Guinea",
		"flag": "🇬🇶",
		"code": "GNQ",
		"dial_code": "+240"
	},
	{
		"name": "Eritrea",
		"flag": "🇪🇷",
		"code": "ERI",
		"dial_code": "+291"
	},
	{
		"name": "Estonia",
		"flag": "🇪🇪",
		"code": "EST",
		"dial_code": "+372"
	},
	{
		"name": "Ethiopia",
		"flag": "🇪🇹",
		"code": "ETH",
		"dial_code": "+251"
	},
	{
		"name": "Falkland Islands (Malvinas)",
		"flag": "🇫🇰",
		"code": "FLK",
		"dial_code": "+500"
	},
	{
		"name": "Faroe Islands",
		"flag": "🇫🇴",
		"code": "FRO",
		"dial_code": "+298"
	},
	{
		"name": "Fiji",
		"flag": "🇫🇯",
		"code": "FJI",
		"dial_code": "+679"
	},
	{
		"name": "Finland",
		"flag": "🇫🇮",
		"code": "FIN",
		"dial_code": "+358"
	},
	{
		"name": "France",
		"flag": "🇫🇷",
		"code": "FRA",
		"dial_code": "+33"
	},
	{
		"name": "French Guiana",
		"flag": "🇬🇫",
		"code": "GUF",
		"dial_code": "+594"
	},
	{
		"name": "French Polynesia",
		"flag": "🇵🇫",
		"code": "PYF",
		"dial_code": "+689"
	},
	{
		"name": "French Southern Territories",
		"flag": "🇹🇫",
		"code": "ATF",
		"dial_code": "+262"
	},
	{
		"name": "Gabon",
		"flag": "🇬🇦",
		"code": "GAB",
		"dial_code": "+241"
	},
	{
		"name": "Gambia",
		"flag": "🇬🇲",
		"code": "GMB",
		"dial_code": "+220"
	},
	{
		"name": "Georgia",
		"flag": "🇬🇪",
		"code": "GEO",
		"dial_code": "+995"
	},
	{
		"name": "Germany",
		"flag": "🇩🇪",
		"code": "DEU",
		"dial_code": "+49"
	},
	{
		"name": "Ghana",
		"flag": "🇬🇭",
		"code": "GHA",
		"dial_code": "+233"
	},
	{
		"name": "Gibraltar",
		"flag": "🇬🇮",
		"code": "GIB",
		"dial_code": "+350"
	},
	{
		"name": "Greece",
		"flag": "🇬🇷",
		"code": "GRC",
		"dial_code": "+30"
	},
	{
		"name": "Greenland",
		"flag": "🇬🇱",
		"code": "GRL",
		"dial_code": "+299"
	},
	{
		"name": "Grenada",
		"flag": "🇬🇩",
		"code": "GRD",
		"dial_code": "+1473"
	},
	{
		"name": "Guadeloupe",
		"flag": "🇬🇵",
		"code": "GLP",
		"dial_code": "+590"
	},
	{
		"name": "Guatemala",
		"flag": "🇬🇹",
		"code": "GTM",
		"dial_code": "+502"
	},
	{
		"name": "Guernsey",
		"flag": "🇬🇬",
		"code": "GGY",
		"dial_code": "+44"
	},
	{
		"name": "Guinea",
		"flag": "🇬🇳",
		"code": "GIN",
		"dial_code": "+224"
	},
	{
		"name": "Guinea-Bissau",
		"flag": "🇬🇼",
		"code": "GNB",
		"dial_code": "+245"
	},
	{
		"name": "Guyana",
		"flag": "🇬🇾",
		"code": "GUY",
		"dial_code": "+592"
	},
	{
		"name": "Haiti",
		"flag": "🇭🇹",
		"code": "HTI",
		"dial_code": "+509"
	},
	{
		"name": "Heard Island and Mcdonald Islands",
		"flag": "🇭🇲",
		"code": "HMD",
		"dial_code": "+672"
	},
	{
		"name": "Holy See (Vatican City State)",
		"flag": "🇻🇦",
		"code": "VAT",
		"dial_code": "+379"
	},
	{
		"name": "Honduras",
		"flag": "🇭🇳",
		"code": "HND",
		"dial_code": "+504"
	},
	{
		"name": "Hong Kong",
		"flag": "🇭🇰",
		"code": "HKG",
		"dial_code": "+852"
	},
	{
		"name": "Hungary",
		"flag": "🇭🇺",
		"code": "HUN",
		"dial_code": "+36"
	},
	{
		"name": "Iceland",
		"flag": "🇮🇸",
		"code": "ISL",
		"dial_code": "+354"
	},
	{
		"name": "India",
		"flag": "🇮🇳",
		"code": "IND",
		"dial_code": "+91"
	},
	{
		"name": "Indonesia",
		"flag": "🇮🇩",
		"code": "IDN",
		"dial_code": "+62"
	},
	{
		"name": "Iran, Islamic Republic of Persian Gulf",
		"flag": "🇮🇷",
		"code": "IRN",
		"dial_code": "+98"
	},
	{
		"name": "Iraq",
		"flag": "🇮🇶",
		"code": "IRQ",
		"dial_code": "+964"
	},
	{
		"name": "Ireland",
		"flag": "🇮🇪",
		"code": "IRL",
		"dial_code": "+353"
	},
	{
		"name": "Isle of Man",
		"flag": "🇮🇲",
		"code": "IMY",
		"dial_code": "+44"
	},
	{
		"name": "Israel",
		"flag": "🇮🇱",
		"code": "ISR",
		"dial_code": "+972"
	},
	{
		"name": "Italy",
		"flag": "🇮🇹",
		"code": "ITA",
		"dial_code": "+39"
	},
	{
		"name": "Jamaica",
		"flag": "🇯🇲",
		"code": "JAM",
		"dial_code": "+1876"
	},
	{
		"name": "Japan",
		"flag": "🇯🇵",
		"code": "JPN",
		"dial_code": "+81"
	},
	{
		"name": "Jersey",
		"flag": "🇯🇪",
		"code": "JEY",
		"dial_code": "+44"
	},
	{
		"name": "Jordan",
		"flag": "🇯🇴",
		"code": "JOR",
		"dial_code": "+962"
	},
	{
		"name": "Kazakhstan",
		"flag": "🇰🇿",
		"code": "KAZ",
		"dial_code": "+7"
	},
	{
		"name": "Kenya",
		"flag": "🇰🇪",
		"code": "KEN",
		"dial_code": "+254"
	},
	{
		"name": "Kiribati",
		"flag": "🇰🇮",
		"code": "KIR",
		"dial_code": "+686"
	},
	{
		"name": "Korea, Democratic People's Republic of Korea",
		"flag": "🇰🇵",
		"code": "PRK",
		"dial_code": "+850"
	},
	{
		"name": "Korea, Republic of South Korea",
		"flag": "🇰🇷",
		"code": "KOR",
		"dial_code": "+82"
	},
	{
		"name": "Kuwait",
		"flag": "🇰🇼",
		"code": "KWT",
		"dial_code": "+965"
	},
	{
		"name": "Kyrgyzstan",
		"flag": "🇰🇬",
		"code": "KGZ",
		"dial_code": "+996"
	},
	{
		"name": "Laos",
		"flag": "🇱🇦",
		"code": "LAO",
		"dial_code": "+856"
	},
	{
		"name": "Latvia",
		"flag": "🇱🇻",
		"code": "LVA",
		"dial_code": "+371"
	},
	{
		"name": "Lebanon",
		"flag": "🇱🇧",
		"code": "LBN",
		"dial_code": "+961"
	},
	{
		"name": "Lesotho",
		"flag": "🇱🇸",
		"code": "LSO",
		"dial_code": "+266"
	},
	{
		"name": "Liberia",
		"flag": "🇱🇷",
		"code": "LBR",
		"dial_code": "+231"
	},
	{
		"name": "Libyan Arab Jamahiriya",
		"flag": "🇱🇾",
		"code": "LBY",
		"dial_code": "+218"
	},
	{
		"name": "Liechtenstein",
		"flag": "🇱🇮",
		"code": "LIE",
		"dial_code": "+423"
	},
	{
		"name": "Lithuania",
		"flag": "🇱🇹",
		"code": "LTU",
		"dial_code": "+370"
	},
	{
		"name": "Luxembourg",
		"flag": "🇱🇺",
		"code": "LUX",
		"dial_code": "+352"
	},
	{
		"name": "Macao",
		"flag": "🇲🇴",
		"code": "MAC",
		"dial_code": "+853"
	},
	{
		"name": "Macedonia",
		"flag": "🇲🇰",
		"code": "MKD",
		"dial_code": "+389"
	},
	{
		"name": "Madagascar",
		"flag": "🇲🇬",
		"code": "MDG",
		"dial_code": "+261"
	},
	{
		"name": "Malawi",
		"flag": "🇲🇼",
		"code": "MWI",
		"dial_code": "+265"
	},
	{
		"name": "Malaysia",
		"flag": "🇲🇾",
		"code": "MYS",
		"dial_code": "+60"
	},
	{
		"name": "Maldives",
		"flag": "🇲🇻",
		"code": "MDV",
		"dial_code": "+960"
	},
	{
		"name": "Mali",
		"flag": "🇲🇱",
		"code": "MLI",
		"dial_code": "+223"
	},
	{
		"name": "Malta",
		"flag": "🇲🇹",
		"code": "MLT",
		"dial_code": "+356"
	},
	{
		"name": "Martinique",
		"flag": "🇲🇶",
		"code": "MTQ",
		"dial_code": "+596"
	},
	{
		"name": "Mauritania",
		"flag": "🇲🇷",
		"code": "MRT",
		"dial_code": "+222"
	},
	{
		"name": "Mauritius",
		"flag": "🇲🇺",
		"code": "MUS",
		"dial_code": "+230"
	},
	{
		"name": "Mayotte",
		"flag": "🇾🇹",
		"code": "MYT",
		"dial_code": "+262"
	},
	// {
	// 	"name": "Mexico",
	// 	"flag": "🇲🇽",
	// 	"code": "MX",
	// 	"dial_code": "+52"
	// },
	{
		"name": "Moldova",
		"flag": "🇲🇩",
		"code": "MDA",
		"dial_code": "+373"
	},
	{
		"name": "Monaco",
		"flag": "🇲🇨",
		"code": "MCO",
		"dial_code": "+377"
	},
	{
		"name": "Mongolia",
		"flag": "🇲🇳",
		"code": "MNG",
		"dial_code": "+976"
	},
	{
		"name": "Montenegro",
		"flag": "🇲🇪",
		"code": "MNE",
		"dial_code": "+382"
	},
	{
		"name": "Montserrat",
		"flag": "🇲🇸",
		"code": "MSR",
		"dial_code": "+1664"
	},
	{
		"name": "Morocco",
		"flag": "🇲🇦",
		"code": "MAR",
		"dial_code": "+212"
	},
	{
		"name": "Mozambique",
		"flag": "🇲🇿",
		"code": "MOZ",
		"dial_code": "+258"
	},
	{
		"name": "Myanmar",
		"flag": "🇲🇲",
		"code": "MMR",
		"dial_code": "+95"
	},
	{
		"name": "Namibia",
		"flag": "🇳🇦",
		"code": "NAM",
		"dial_code": "+264"
	},
	{
		"name": "Nauru",
		"flag": "🇳🇷",
		"code": "NRU",
		"dial_code": "+674"
	},
	{
		"name": "Nepal",
		"flag": "🇳🇵",
		"code": "NPL",
		"dial_code": "+977"
	},
	{
		"name": "Netherlands",
		"flag": "🇳🇱",
		"code": "NLD",
		"dial_code": "+31"
	},
	{
		"name": "New Caledonia",
		"flag": "🇳🇨",
		"code": "NCL",
		"dial_code": "+687"
	},
	{
		"name": "New Zealand",
		"flag": "🇳🇿",
		"code": "NZL",
		"dial_code": "+64"
	},
	{
		"name": "Nicaragua",
		"flag": "🇳🇮",
		"code": "NIC",
		"dial_code": "+505"
	},
	{
		"name": "Niger",
		"flag": "🇳🇪",
		"code": "NER",
		"dial_code": "+227"
	},
	{
		"name": "Nigeria",
		"flag": "🇳🇬",
		"code": "NGA",
		"dial_code": "+234"
	},
	{
		"name": "Niue",
		"flag": "🇳🇺",
		"code": "NIU",
		"dial_code": "+683"
	},
	{
		"name": "Norfolk Island",
		"flag": "🇳🇫",
		"code": "NFK",
		"dial_code": "+672"
	},
	{
		"name": "Norway",
		"flag": "🇳🇴",
		"code": "NOR",
		"dial_code": "+47"
	},
	{
		"name": "Oman",
		"flag": "🇴🇲",
		"code": "OMN",
		"dial_code": "+968"
	},
	{
		"name": "Pakistan",
		"flag": "🇵🇰",
		"code": "PAK",
		"dial_code": "+92"
	},
	{
		"name": "Palestinian Territory, Occupied",
		"flag": "🇵🇸",
		"code": "PSE",
		"dial_code": "+970"
	},
	{
		"name": "Panama",
		"flag": "🇵🇦",
		"code": "PAN",
		"dial_code": "+507"
	},
	{
		"name": "Papua New Guinea",
		"flag": "🇵🇬",
		"code": "PNG",
		"dial_code": "+675"
	},
	{
		"name": "Paraguay",
		"flag": "🇵🇾",
		"code": "PRY",
		"dial_code": "+595"
	},
	{
		"name": "Peru",
		"flag": "🇵🇪",
		"code": "PER",
		"dial_code": "+51"
	},
	{
		"name": "Philippines",
		"flag": "🇵🇭",
		"code": "PHL",
		"dial_code": "+63"
	},
	{
		"name": "Pitcairn",
		"flag": "🇵🇳",
		"code": "PCN",
		"dial_code": "+64"
	},
	{
		"name": "Poland",
		"flag": "🇵🇱",
		"code": "POL",
		"dial_code": "+48"
	},
	{
		"name": "Portugal",
		"flag": "🇵🇹",
		"code": "PRT",
		"dial_code": "+351"
	},
	// {
	// 	"name": "Puerto Rico",
	// 	"flag": "🇵🇷",
	// 	"code": "PR",
	// 	"dial_code": "+1939"
	// },
	{
		"name": "Qatar",
		"flag": "🇶🇦",
		"code": "QAT",
		"dial_code": "+974"
	},
	{
		"name": "Reunion",
		"flag": "🇷🇪",
		"code": "REU",
		"dial_code": "+262"
	},
	{
		"name": "Romania",
		"flag": "🇷🇴",
		"code": "ROM",
		"dial_code": "+40"
	},
	{
		"name": "Russia",
		"flag": "🇷🇺",
		"code": "RUS",
		"dial_code": "+7"
	},
	{
		"name": "Rwanda",
		"flag": "🇷🇼",
		"code": "RWA",
		"dial_code": "+250"
	},
	{
		"name": "Saint Barthelemy",
		"flag": "🇧🇱",
		"code": "BLM",
		"dial_code": "+590"
	},
	{
		"name": "Saint Helena, Ascension and Tristan Da Cunha",
		"flag": "🇸🇭",
		"code": "SHN",
		"dial_code": "+290"
	},
	{
		"name": "Saint Kitts and Nevis",
		"flag": "🇰🇳",
		"code": "KNA",
		"dial_code": "+1869"
	},
	{
		"name": "Saint Lucia",
		"flag": "🇱🇨",
		"code": "LCA",
		"dial_code": "+1758"
	},
	{
		"name": "Saint Martin",
		"flag": "🇲🇫",
		"code": "MAF",
		"dial_code": "+590"
	},
	{
		"name": "Saint Pierre and Miquelon",
		"flag": "🇵🇲",
		"code": "SPM",
		"dial_code": "+508"
	},
	{
		"name": "Saint Vincent and the Grenadines",
		"flag": "🇻🇨",
		"code": "VCT",
		"dial_code": "+1784"
	},
	{
		"name": "Samoa",
		"flag": "🇼🇸",
		"code": "WSM",
		"dial_code": "+685"
	},
	{
		"name": "San Marino",
		"flag": "🇸🇲",
		"code": "SMR",
		"dial_code": "+378"
	},
	{
		"name": "Sao Tome and Principe",
		"flag": "🇸🇹",
		"code": "STP",
		"dial_code": "+239"
	},
	{
		"name": "Saudi Arabia",
		"flag": "🇸🇦",
		"code": "SAU",
		"dial_code": "+966"
	},
	{
		"name": "Senegal",
		"flag": "🇸🇳",
		"code": "SEN",
		"dial_code": "+221"
	},
	{
		"name": "Serbia",
		"flag": "🇷🇸",
		"code": "SRB",
		"dial_code": "+381"
	},
	{
		"name": "Seychelles",
		"flag": "🇸🇨",
		"code": "SYC",
		"dial_code": "+248"
	},
	{
		"name": "Sierra Leone",
		"flag": "🇸🇱",
		"code": "SLE",
		"dial_code": "+232"
	},
	{
		"name": "Singapore",
		"flag": "🇸🇬",
		"code": "SGP",
		"dial_code": "+65"
	},
	{
		"name": "Slovakia",
		"flag": "🇸🇰",
		"code": "SVK",
		"dial_code": "+421"
	},
	{
		"name": "Slovenia",
		"flag": "🇸🇮",
		"code": "SVN",
		"dial_code": "+386"
	},
	{
		"name": "Solomon Islands",
		"flag": "🇸🇧",
		"code": "SLB",
		"dial_code": "+677"
	},
	{
		"name": "Somalia",
		"flag": "🇸🇴",
		"code": "SOM",
		"dial_code": "+252"
	},
	{
		"name": "South Africa",
		"flag": "🇿🇦",
		"code": "ZAF",
		"dial_code": "+27"
	},
	{
		"name": "South Sudan",
		"flag": "🇸🇸",
		"code": "SS",
		"dial_code": "+211"
	},
	{
		"name": "South Georgia and the South Sandwich Islands",
		"flag": "🇬🇸",
		"code": "SGS",
		"dial_code": "+500"
	},
	{
		"name": "Spain",
		"flag": "🇪🇸",
		"code": "ESP",
		"dial_code": "+34"
	},
	{
		"name": "Sri Lanka",
		"flag": "🇱🇰",
		"code": "LKA",
		"dial_code": "+94"
	},
	{
		"name": "Sudan",
		"flag": "🇸🇩",
		"code": "SDN",
		"dial_code": "+249"
	},
	{
		"name": "Suriname",
		"flag": "🇸🇷",
		"code": "SUR",
		"dial_code": "+597"
	},
	{
		"name": "Svalbard and Jan Mayen",
		"flag": "🇸🇯",
		"code": "SJM",
		"dial_code": "+47"
	},
	{
		"name": "Swaziland",
		"flag": "🇸🇿",
		"code": "SWZ",
		"dial_code": "+268"
	},
	{
		"name": "Sweden",
		"flag": "🇸🇪",
		"code": "SWE",
		"dial_code": "+46"
	},
	{
		"name": "Switzerland",
		"flag": "🇨🇭",
		"code": "CHE",
		"dial_code": "+41"
	},
	{
		"name": "Syrian Arab Republic",
		"flag": "🇸🇾",
		"code": "SYR",
		"dial_code": "+963"
	},
	{
		"name": "Taiwan",
		"flag": "🇹🇼",
		"code": "TWN",
		"dial_code": "+886"
	},
	{
		"name": "Tajikistan",
		"flag": "🇹🇯",
		"code": "TJK",
		"dial_code": "+992"
	},
	{
		"name": "Tanzania, United Republic of Tanzania",
		"flag": "🇹🇿",
		"code": "TZA",
		"dial_code": "+255"
	},
	{
		"name": "Thailand",
		"flag": "🇹🇭",
		"code": "THA",
		"dial_code": "+66"
	},
	{
		"name": "Timor-Leste",
		"flag": "🇹🇱",
		"code": "TMP",
		"dial_code": "+670"
	},
	{
		"name": "Togo",
		"flag": "🇹🇬",
		"code": "TGO",
		"dial_code": "+228"
	},
	{
		"name": "Tokelau",
		"flag": "🇹🇰",
		"code": "TKL",
		"dial_code": "+690"
	},
	{
		"name": "Tonga",
		"flag": "🇹🇴",
		"code": "TON",
		"dial_code": "+676"
	},
	{
		"name": "Trinidad and Tobago",
		"flag": "🇹🇹",
		"code": "TTO",
		"dial_code": "+1868"
	},
	{
		"name": "Tunisia",
		"flag": "🇹🇳",
		"code": "TUN",
		"dial_code": "+216"
	},
	{
		"name": "Turkey",
		"flag": "🇹🇷",
		"code": "TUR",
		"dial_code": "+90"
	},
	{
		"name": "Turkmenistan",
		"flag": "🇹🇲",
		"code": "TKM",
		"dial_code": "+993"
	},
	{
		"name": "Turks and Caicos Islands",
		"flag": "🇹🇨",
		"code": "TCA",
		"dial_code": "+1649"
	},
	{
		"name": "Tuvalu",
		"flag": "🇹🇻",
		"code": "TUV",
		"dial_code": "+688"
	},
	{
		"name": "Uganda",
		"flag": "🇺🇬",
		"code": "UGA",
		"dial_code": "+256"
	},
	{
		"name": "Ukraine",
		"flag": "🇺🇦",
		"code": "UKR",
		"dial_code": "+380"
	},
	{
		"name": "United Arab Emirates",
		"flag": "🇦🇪",
		"code": "ARE",
		"dial_code": "+971"
	},
	{
		"name": "United Kingdom",
		"flag": "🇬🇧",
		"code": "GBR",
		"dial_code": "+44"
	},
	{
		"name": "United States",
		"flag": "🇺🇸",
		"code": "USA",
		"dial_code": "+1"
	},
	{
		"name": "Uruguay",
		"flag": "🇺🇾",
		"code": "URY",
		"dial_code": "+598"
	},
	{
		"name": "Uzbekistan",
		"flag": "🇺🇿",
		"code": "UZB",
		"dial_code": "+998"
	},
	{
		"name": "Vanuatu",
		"flag": "🇻🇺",
		"code": "VUT",
		"dial_code": "+678"
	},
	{
		"name": "Venezuela, Bolivarian Republic of Venezuela",
		"flag": "🇻🇪",
		"code": "VEN",
		"dial_code": "+58"
	},
	{
		"name": "Vietnam",
		"flag": "🇻🇳",
		"code": "VNM",
		"dial_code": "+84"
	},
	{
		"name": "Virgin Islands, British",
		"flag": "🇻🇬",
		"code": "VGB",
		"dial_code": "+1284"
	},
	// {
	// 	"name": "Virgin Islands, U.S.",
	// 	"flag": "🇻🇮",
	// 	"code": "VIR",
	// 	"dial_code": "+1340"
	// },
	{
		"name": "Wallis and Futuna",
		"flag": "🇼🇫",
		"code": "WLF",
		"dial_code": "+681"
	},
	//<option value="ESH">Western Sahara</option>
	{
		"name": "Yemen",
		"flag": "🇾🇪",
		"code": "YEM",
		"dial_code": "+967"
	},
	{
		"name": "Zambia",
		"flag": "🇿🇲",
		"code": "ZMB",
		"dial_code": "+260"
	},
	{
		"name": "Zimbabwe",
		"flag": "🇿🇼",
		"code": "ZWE",
		"dial_code": "+263"
	}
]

export default data
