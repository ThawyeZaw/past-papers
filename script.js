const years = ['years', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
	hero = document.querySelector('.hero')
let table_codes = '',
	filtered = [],
	option = []

/* -------- add years selection options ------- */
function add_options(opt) {
	opt.forEach(o => {
		document.querySelector(`#${opt[0]}`).innerHTML += `<option value="${o}">${o}</option>`
	})
}

/* -- function to filter by year or by season - */
const filter = opt => {
	let y = document.querySelector(`#${opt}`), p
	if (opt == 'years') p = 0
	if (opt == 'season') p = 1
	filtered = sources.filter(s => s[p] == y.value)
	add_table(filtered)
	if (y.value === 'years') show_all()
	// console.log(filtered)
}

/* -- generate codes for table by given array - */
function generate_table(data) {
	table_codes = ''
	data.forEach(p => {
		table_codes += `
  <tr>
    <td class="smallTd">${p[0]}</td>
    <td class="smallTd">${p[1]}</td>
    <td class="smallTd">
      <a href="https://papers.xtremepape.rs/CAIE/IGCSE/Chemistry%20(0620)/${p[2]}.pdf">
        <p class="smallTd">${p[2]}</p>
      </a>
    </td>
    <td class="smallTd">
      <a href="https://papers.xtremepape.rs/CAIE/IGCSE/Chemistry%20(0620)/${p[3]}.pdf">
        <p class="smallTd">${p[3]}</p>
      </a>
    </td>
  </tr>
`
	})
}

/* --- function to edit table by array given -- */
function add_table(arr) {
	generate_table(arr)
	document.querySelector('#table').innerHTML = table_codes
}

/* -------- function to show all years -------- */
function show_all() {
	generate_table(sources)
	document.querySelector('#table').innerHTML += table_codes
}

/* ----- show necessaries when window load ---- */
window.onload = () => {
	hero.innerHTML += `
<div class="choose"><a href="../index.html">&larr; Choose another subjects</a></div>
<table border="1" width="100%">
	<tr>
		<th class="td">
			Year
			<select name="years" id="years" onchange="filter('years')"></select>
		</th>
		<th class="td">
			Season
			<!-- <select name="season" id="season" onchange="filter('season')"></select> -->
		</th>
		<th class="td">QP</th>
		<th class="td">MS</th>
	</tr>
</table>
<div class="toTop" onclick="toTop()">Top &uarr;</div>`
	show_all()
	add_options(years)
	// add_options(season)
	window.onscroll = function () {
		scrollFunction()
	}
}

/* ---------- to Top button on scroll --------- */
function scrollFunction() {
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		document.querySelector('.toTop').style.display = 'flex'
	} else {
		document.querySelector('.toTop').style.display = 'none'
	}
}
const toTop = () => {
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
}