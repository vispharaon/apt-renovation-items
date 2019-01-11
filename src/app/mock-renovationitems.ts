import { RenovationItem } from './renovationitem'

export const RENOVATIONITEMS: RenovationItem[] = [
    {
      id: 1,
      name: 'Windows - living room',
      dateChanged: new Date(2018, 6, 1),
      cost: 2000.0,
      estimatedCost: 2500.0,
      description: 'New white windows with triple glass. Changed old wood for plastic.',
      status: 2
    },
    {
      id: 2,
      name: 'Kitchen',
      dateChanged: new Date(2018, 12, 15),
      cost: 1500.0,
      estimatedCost: 2000.0,
      description: 'New white kitchen with every element.',
      status: 1
    },
    {
      id: 3,
      name: 'Living room',
      dateChanged: new Date(2019, 4, 1),
      cost: null,
      estimatedCost: 2500.0,
      description: 'Everything for the living room',
      status: 0
    }
]