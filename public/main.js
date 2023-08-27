const app = new Vue({
  el: '#app',
  data: {
    pea1: 'Yy',
    pea2: 'Yy',
  },
  methods: {
    setAlleles: function (event) {

      const id = event.composedPath()[2].id;
      const value = event.target.value;

      if (id === 'pea-1-genotype') {
         this.pea1 = value;
      } else if (id === 'pea-2-genotype') {
        this.pea2 = value;
      }
    },
    getImgFromGeno: genotype => (
      genotype.includes('Y') ?
      'images/yellow_pea.svg' :
      'images/green_pea.svg'
    ),
  },
  computed: {
    cell1: function () {
      return [this.pea2[0], this.pea1[0]].sort().join('');
    },
    cell2: function () {
      return [this.pea2[0], this.pea1[1]].sort().join('');
    },
    cell3: function () {
      return [this.pea2[1], this.pea1[0]].sort().join('');
    },
    cell4: function () {
      return [this.pea2[1], this.pea1[1]].sort().join('');
    },
    cells: function () {
      return [this.cell1, this.cell2, this.cell3, this.cell4];
    },
    count_YY: function () {
      return this.cells.reduce((acc, curr) => acc += curr === 'YY', 0);
    },
    count_Yy: function () {
      return this.cells.reduce((acc, curr) => acc += curr === 'Yy', 0);
    },
    count_yy: function () {
      return this.cells.reduce((acc, curr) => acc += curr === 'yy', 0);
    },
    yellow_ratio: function () {
      return this.cells.reduce((acc, curr) => acc += curr.includes('Y'), 0);
    },
    green_ratio: function () {
      return this.cells.reduce((acc, curr) => acc += !curr.includes('Y'), 0);
    },
  }
})