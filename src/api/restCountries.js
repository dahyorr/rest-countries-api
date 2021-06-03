import axios from 'axios'

export default axios.create({
	baseURL: 'https://restcountries.eu/rest/v2',
	params: {
		fields: 'name;capital;currencies;languages;capital;subregion;flag;region;population;nativeName;topLevelDomain;borders;alpha3Code',
	},
})
