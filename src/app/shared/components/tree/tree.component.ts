import { Component, OnInit } from '@angular/core';
import {ArrayDataSource} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';



const TREE_DATA: ExampleFlatNode[] = [
  {
    name: 'Doações',
    expandable: true,
    level: 0,
  },
  {
    name: 'Dízimo',
    expandable: false,
    level: 1,
  },
  {
    name: 'Necessidades Básicas',
    expandable: true,
    level: 0,
  },
  {
    name: 'Aluguel',
    expandable: false,
    level: 1,
  },
  {
    name: 'Água',
    expandable: false,
    level: 1,
  },
  {
    name: 'Luz',
    expandable: false,
    level: 1,
  },
  {
    name: 'Fraldas Arthur',
    expandable: false,
    level: 1,
  },
  {
    name: 'Gasolina',
    expandable: false,
    level: 1,
  },
  {
    name: 'Internet',
    expandable: false,
    level: 1,
  },
  {
    name: 'Fundo Mushu',
    expandable: false,
    level: 1,
  },
  {
    name: 'Tim',
    expandable: false,
    level: 1,
  },
  {
    name: 'Investimentos',
    expandable: true,
    level: 0,
  },
  {
    name: 'Renda Variável',
    expandable: false,
    level: 1,
  },
  {
    name: 'Criptomoedas',
    expandable: false,
    level: 1,
  },
  {
    name: 'Renda Fixa',
    expandable: false,
    level: 1,
  },
  {
    name: 'Despesas de Longo Prazo',
    expandable: true,
    level: 0,
  },
  {
    name: 'Entrada Casa Própria',
    expandable: false,
    level: 1,
  },
  {
    name: 'Diversão',
    expandable: true,
    level: 0,
  },
  {
    name: 'Streamings',
    expandable: false,
    level: 1,
  },
  {
    name: 'Mesadas',
    expandable: false,
    level: 1,
  },
  {
    name: 'Roles',
    expandable: false,
    level: 1,
  },
  {
    name: 'Instrução',
    expandable: true,
    level: 0,
  },
  {
    name: 'Mensalidade Pós',
    expandable: false,
    level: 1,
  }
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  isExpanded?: boolean;
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  dataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  getParentNode(node: ExampleFlatNode) {
    const nodeIndex = TREE_DATA.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (TREE_DATA[i].level === node.level - 1) {
        return TREE_DATA[i];
      }
    }

    return null;
  }

  shouldRender(node: ExampleFlatNode) {
    let parent = this.getParentNode(node);
    while (parent) {
      if (!parent.isExpanded) {
        return false;
      }
      parent = this.getParentNode(parent);
    }
    return true;
  }

}
