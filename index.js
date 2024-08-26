// Data.
const data = [
	{
		"Time": "36:50",
		"Place": 1,
		"Seconds": 2210,
		"Name": "Marco Pantani",
		"Year": 1995,
		"Nationality": "ITA",
		"Doping": "Alleged drug use during 1995 due to high hematocrit levels",
		"URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
	},
	{
		"Time": "36:55",
		"Place": 2,
		"Seconds": 2215,
		"Name": "Marco Pantani",
		"Year": 1997,
		"Nationality": "ITA",
		"Doping": "Alleged drug use during 1997 due to high hermatocrit levels",
		"URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
	},
	{
		"Time": "37:15",
		"Place": 3,
		"Seconds": 2235,
		"Name": "Marco Pantani",
		"Year": 1994,
		"Nationality": "ITA",
		"Doping": "Alleged drug use during 1994 due to high hermatocrit levels",
		"URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
	},
	{
		"Time": "37:36",
		"Place": 4,
		"Seconds": 2256,
		"Name": "Lance Armstrong",
		"Year": 2004,
		"Nationality": "USA",
		"Doping": "2004 Tour de France title stripped by UCI in 2012",
		"URL": "https://en.wikipedia.org/wiki/History_of_Lance_Armstrong_doping_allegations"
	},
	{
		"Time": "37:42",
		"Place": 5,
		"Seconds": 2262,
		"Name": "Jan Ullrich",
		"Year": 1997,
		"Nationality": "GER",
		"Doping": "Confessed later in his career to doping",
		"URL": "https://en.wikipedia.org/wiki/Jan_Ullrich#Operaci.C3.B3n_Puerto_doping_case"
	},
	{
		"Time": "38:05",
		"Place": 6,
		"Seconds": 2285,
		"Name": "Lance Armstrong",
		"Year": 2001,
		"Nationality": "USA",
		"Doping": "2001 Tour de France title stripped by UCI in 2012",
		"URL": "https://en.wikipedia.org/wiki/History_of_Lance_Armstrong_doping_allegations"
	},
	{
		"Time": "38:14",
		"Place": 7,
		"Seconds": 2294,
		"Name": "Miguel Indurain",
		"Year": 1995,
		"Nationality": "ESP",
		"Doping": "1994 Failed test for salbutemol, not a banned drug at that time",
		"URL": "http://www.independent.co.uk/sport/drugs-in-sport-indurain-allowed-to-use-banned-drug-1379584.html"
	},
	{
		"Time": "38:14",
		"Place": 8,
		"Seconds": 2294,
		"Name": "Alex Zülle",
		"Year": 1995,
		"Nationality": "SUI",
		"Doping": "Confessed in 1998 to taking EPO",
		"URL": "https://en.wikipedia.org/wiki/Alex_Z%C3%BClle#Festina_affair"
	},
	{
		"Time": "38:16",
		"Place": 9,
		"Seconds": 2296,
		"Name": "Bjarne Riis",
		"Year": 1995,
		"Nationality": "DEN",
		"Doping": "Alleged drug use during 1995 due to high hermatrocite levels",
		"URL": "https://en.wikipedia.org/wiki/Bjarne_Riis#Doping_allegations"
	},
	{
		"Time": "38:22",
		"Place": 10,
		"Seconds": 2302,
		"Name": "Richard Virenque",
		"Year": 1997,
		"Nationality": "FRA",
		"Doping": "In 2000 confessed to doping during his career",
		"URL": "https://en.wikipedia.org/wiki/Richard_Virenque#Festina_affair"
	},
	{
		"Time": "38:36",
		"Place": 11,
		"Seconds": 2316,
		"Name": "Floyd Landis",
		"Year": 2006,
		"Nationality": "USA",
		"Doping": "Stripped of 2006 Tour de France title",
		"URL": "https://en.wikipedia.org/wiki/Floyd_Landis_doping_case"
	},
	{
		"Time": "38:36",
		"Place": 12,
		"Seconds": 2316,
		"Name": "Andreas Klöden",
		"Year": 2006,
		"Nationality": "GER",
		"Doping": "Alleged use of illegal blood transfusions in 2006",
		"URL": "https://en.wikipedia.org/wiki/Andreas_Kl%C3%B6den#2009_Doping_allegations"
	},
	{
		"Time": "38:40",
		"Place": 13,
		"Seconds": 2320,
		"Name": "Jan Ullrich",
		"Year": 2004,
		"Nationality": "GER",
		"Doping": "Confessed later in his career to doping",
		"URL": "https://en.wikipedia.org/wiki/Jan_Ullrich#Operaci.C3.B3n_Puerto_doping_case"
	},
	{
		"Time": "38:44",
		"Place": 14,
		"Seconds": 2324,
		"Name": "Laurent Madouas",
		"Year": 1995,
		"Nationality": "FRA",
		"Doping": "Tested positive for Salbutemol in 1994, suspended for 1 month",
		"URL": "http://www.dopeology.org/incidents/Madouas-positive/"
	},
	{
		"Time": "38:55",
		"Place": 15,
		"Seconds": 2335,
		"Name": "Richard Virenque",
		"Year": 1994,
		"Nationality": "FRA",
		"Doping": "In 2000 confessed to doping during his career",
		"URL": "https://en.wikipedia.org/wiki/Richard_Virenque#Festina_affair"
	},
	{
		"Time": "39:01",
		"Place": 16,
		"Seconds": 2341,
		"Name": "Carlos Sastre",
		"Year": 2006,
		"Nationality": "ESP",
		"Doping": "",
		"URL": ""
	},
	{
		"Time": "39:09",
		"Place": 17,
		"Seconds": 2349,
		"Name": "Iban Mayo",
		"Year": 2003,
		"Nationality": "ESP",
		"Doping": "Failed doping test in 2007 Tour de France",
		"URL": "https://en.wikipedia.org/wiki/Iban_Mayo"
	},
	{
		"Time": "39:12",
		"Place": 18,
		"Seconds": 2352,
		"Name": "Andreas Klöden",
		"Year": 2004,
		"Nationality": "GER",
		"Doping": "Alleged doping during 2006 Tour de France",
		"URL": "https://en.wikipedia.org/wiki/Operaci%C3%B3n_Puerto_doping_case"
	},
	{
		"Time": "39:14",
		"Place": 19,
		"Seconds": 2354,
		"Name": "Jose Azevedo",
		"Year": 2004,
		"Nationality": "POR",
		"Doping": "Implicated in the Operación Puerto doping case",
		"URL": "https://en.wikipedia.org/wiki/Operaci%C3%B3n_Puerto_doping_case"
	},
	{
		"Time": "39:15",
		"Place": 20,
		"Seconds": 2355,
		"Name": "Levi Leipheimer",
		"Year": 2006,
		"Nationality": "USA",
		"Doping": "Testified in 2012 to doping during his time with US Postal Service ",
		"URL": "http://www.wsj.com/articles/SB10000872396390444799904578048352672452328"
	},
	{
		"Time": "39:22",
		"Place": 21,
		"Seconds": 2362,
		"Name": "Francesco Casagrande",
		"Year": 1997,
		"Nationality": "ITA",
		"Doping": "Positive testosterone test in 1998",
		"URL": "http://autobus.cyclingnews.com/results/1998/sep98/sep2.shtml"
	},
	{
		"Time": "39:23",
		"Place": 22,
		"Seconds": 2363,
		"Name": "Nairo Quintana",
		"Year": 2015,
		"Nationality": "COL",
		"Doping": "",
		"URL": ""
	},
	{
		"Time": "39:23",
		"Place": 23,
		"Seconds": 2363,
		"Name": "Bjarne Riis",
		"Year": 1997,
		"Nationality": "DEN",
		"Doping": "Alleged drug use during 1995 due to high hermatrocite levels",
		"URL": "https://en.wikipedia.org/wiki/Bjarne_Riis#Doping_allegations"
	},
	{
		"Time": "39:30",
		"Place": 24,
		"Seconds": 2370,
		"Name": "Miguel Indurain",
		"Year": 1994,
		"Nationality": "ESP",
		"Doping": "1994 Failed test for salbutemol, not a banned drug at that time",
		"URL": "http://www.independent.co.uk/sport/drugs-in-sport-indurain-allowed-to-use-banned-drug-1379584.html"
	},
	{
		"Time": "39:30",
		"Place": 25,
		"Seconds": 2370,
		"Name": "Luc Leblanc",
		"Year": 1994,
		"Nationality": "FRA",
		"Doping": "Admitted to using epo and amphetimines throughout 1994 ",
		"URL": "http://www.dopeology.org/people/Luc_Leblanc/"
	},
	{
		"Time": "39:32",
		"Place": 26,
		"Seconds": 2372,
		"Name": "Carlos Sastre",
		"Year": 2008,
		"Nationality": "ESP",
		"Doping": "",
		"URL": ""
	},
	{
		"Time": "39:37",
		"Place": 27,
		"Seconds": 2377,
		"Name": "Vladimir Poulnikov",
		"Year": 1994,
		"Nationality": "UKR",
		"Doping": "",
		"URL": ""
	},
	{
		"Time": "39:40",
		"Place": 28,
		"Seconds": 2380,
		"Name": "Giuseppe Guerini",
		"Year": 2004,
		"Nationality": "ITA",
		"Doping": "",
		"URL": ""
	},
	{
		"Time": "39:41",
		"Place": 29,
		"Seconds": 2381,
		"Name": "Santos Gonzalez",
		"Year": 2004,
		"Nationality": "ESP",
		"Doping": "High Hematocrit during 2005 season, removed by team management",
		"URL": "http://www.cyclingnews.com/news/santos-gonzalez-sacked-by-phonak/"
	},
	{
		"Time": "39:41",
		"Place": 30,
		"Seconds": 2381,
		"Name": "Vladimir Karpets",
		"Year": 2004,
		"Nationality": "RUS",
		"Doping": "Made payments to Ferrari, but no charges filed",
		"URL": "http://www.dopeology.org/incidents/Ferrari-investigation/"
	},
	{
		"Time": "39:45",
		"Place": 31,
		"Seconds": 2385,
		"Name": "Fernando Escartin",
		"Year": 1995,
		"Nationality": "ESP",
		"Doping": "Implicated in Giardini Margherita Raid in 1998 as a 'victim' ",
		"URL": "http://www.dopeology.org/incidents/Giardini-Margherita-raid-%5bBologna%5d/"
	},
	{
		"Time": "39:47",
		"Place": 32,
		"Seconds": 2387,
		"Name": "Denis Menchov",
		"Year": 2006,
		"Nationality": "RUS",
		"Doping": "",
		"URL": ""
	},
	{
		"Time": "39:47",
		"Place": 33,
		"Seconds": 2387,
		"Name": "Michael Rasmussen",
		"Year": 2006,
		"Nationality": "DEN",
		"Doping": "Admitted to doping with multiple substances 1998-2010",
		"URL": "http://www.dopeology.org/people/Michael_Rasmussen/"
	},
	{
		"Time": "39:47",
		"Place": 34,
		"Seconds": 2387,
		"Name": "Pietro Caucchioli",
		"Year": 2006,
		"Nationality": "ITA",
		"Doping": "Associated with Mantova investigation, charges dropped",
		"URL": "http://www.cyclingnews.com/news/italian-judge-set-to-decide-if-32-named-in-mantova-doping-investigation-should-go-on-trial/"
	},
	{
		"Time": "39:50",
		"Place": 35,
		"Seconds": 2390,
		"Name": "Nairo Quintana",
		"Year": 2013,
		"Nationality": "COL",
		"Doping": "",
		"URL": ""
	}
]

// Dimensions.
const width = 920
const height = 630
const marginTop = 100
const marginRight = 20
const marginBottom = 30
const marginLeft = 60

// Horizontal minimum and maximum domain.
const horizontalDomain = data.map(d => d.Year)
const minHorizontalDomain = Math.min(...horizontalDomain)
const maxHorizontalDomain = Math.max(...horizontalDomain)

// Vertical domain.
const verticalScaleSpecifier = '%M:%S'
const verticalDomain = d3.extent(data.map(d => d3.timeParse(verticalScaleSpecifier)(d.Time)))

// Horizontal scale and axis.
const horizontalScaleSpecifier = "%Y"
const horizontalScale = d3
	.scaleTime()
	.domain([
		d3.timeParse(horizontalScaleSpecifier)(minHorizontalDomain - 1), 
		d3.timeParse(horizontalScaleSpecifier)(maxHorizontalDomain + 1)
	])
	.range([marginLeft, width - marginRight])

const horizontalAxis = d3
	.axisBottom(horizontalScale)

// Vertical scale and axis.
const verticalScale = d3
	.scaleTime()
	.domain(verticalDomain.slice().reverse())
	.range([height - marginBottom, marginTop])

const verticalAxis = d3
	.axisLeft(verticalScale)
	.tickFormat(d3.timeFormat("%M:%S"))
	.tickValues(intervalValues(...verticalDomain, 15, 10))

function intervalValues(start, end, interval, offset) {
	const result = []
	const startMili = start.getTime() + offset * 1000
	const endMili = end.getTime()
	const intervalMili = interval * 1000

	for (let i=startMili; i<=endMili; i += intervalMili) {
		result.push(new Date(i))
	}
	
	return result
}

// Color scale
const colorScale = d3
	.scaleOrdinal(d3.schemeCategory10)

// Scatter plot
const scatterPlot = d3
	.select('.scatter-plot')

// Svg appending
const svg = scatterPlot
	.append('svg')
	.attr('viewBox', [0, 0, width, height])
	.attr('width', width)
	.attr('height', height)

// Title appending
svg
	.append('text')
	.attr('id', 'title')
	.attr('class', 'title')
	.attr('x', width / 2)
	.attr('y', marginTop / 2)
	.attr('text-anchor', 'middle')
	.text('Doping in Professional Bicycle Racing');

// Subtitle appending
svg
	.append('text')
	.attr('class', 'subtitle')
	.attr('x', width / 2)
	.attr('y', marginTop / 2 + 25)
	.attr('text-anchor', 'middle')
	.text("35 Fastest times up Alpe d'Huez");

// Points appending
const dots = svg
	.append('g')
	.selectAll('circle')
	.data(data)
	.enter()
	.append('circle')
	.attr('class', 'dot')
	.attr('cx', d => horizontalScale(d3.timeParse(horizontalScaleSpecifier)(d.Year)))
	.attr('cy', d => verticalScale(d3.timeParse(verticalScaleSpecifier)(d.Time)))
	.attr('r', 6)
	.style('fill', d => colorScale(d.Doping !== ''))
	.attr('data-xvalue', d => d.Year)
	.attr('data-yvalue', d => {
		const time = d.Time.split(':')
		return new Date(1970, 0, 1, 0, time[0], time[1]).toISOString()
	})

// Legend
const legendContainer = svg
	.append('g')
	.attr('id', 'legend')
	.attr('class', 'legend')
	.attr('transform', `translate(${width - 30}, ${height / 2})`)
	.selectAll('g')
	.data(colorScale.domain())
	.enter()

legendContainer
	.append('rect')
	.attr('width', 18)
	.attr('height', 18)
	.attr('fill', colorScale)
	.attr('transform', (d, i) => `translate(0, ${20 * i})`)

legendContainer
	.append('text')
	.attr('class', 'legend-description')
	.text(d => d ? 'Riders with doping allegations' : 'No doping allegations')
	.style('text-anchor', 'end')
	.attr('transform', (d, i) => `translate(-5, ${20 * i + 12})`)

// Tooltip hover
dots
	.on('mouseover', (e, d) => {
		const { pageX, pageY } = e
		const { 
			Name: name, 
			Nationality: nationality, 
			Year: year,
			Time: time,
			Doping: doping 
		} = d

		tooltip
			.attr('class', 'shown')
			.attr('data-year', year)
			.style('left', `${pageX + 20}px`)
			.style('top', `${pageY - 20}px`)

		tooltip
			.select('.name-nationality')
			.text(`${name}: ${nationality}`)

		tooltip
			.select('.year-time')
			.text(`Year: ${year}, Time: ${time}`)

		tooltip
			.select('.doping')
			.text(`${doping}`)
	})
	.on('mouseout', () => {
		tooltip
			.attr('class', 'hidden')
	})

// Tooltip appending
const tooltip = scatterPlot
	.append('div')
	.attr('id', 'tooltip')
	.attr('class', 'hidden')

tooltip
    .append('span')
    .attr('class', 'name-nationality')
    
tooltip
    .append('span')
    .attr('class', 'year-time')

tooltip
    .append('span')
    .attr('class', 'doping')

// Horizontal axis appending
svg
	.append('g')
	.attr('id', 'x-axis')
	.attr('transform', `translate(0, ${height - marginBottom})`)
	.call(horizontalAxis)

// Vertical axis appending
svg
	.append('g')
	.attr('id', 'y-axis')
	.attr('transform', `translate(${marginLeft}, 0)`)
	.call(verticalAxis)

// Vertical axis description 
svg
	.append('text')
	.attr('class', 'vertical-description')
	.attr('x', -240)
	.attr('y', 15)
	.attr('transform', 'rotate(-90)')
	.text('Time in Minutes')

