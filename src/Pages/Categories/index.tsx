import ProductsList from '../../components/ProdutsList'

import {
  useGetActionGameQuery,
  useGetFigthGameQuery,
  useGetRpgGameQuery,
  useGetSimulationGameQuery,
  useGetSportGameQuery
} from '../../Services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGameQuery()
  const { data: figthGames, isLoading: isLoadingFigth } = useGetFigthGameQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGameQuery()
  const { data: simultionGames, isLoading: isLoadingSimulation } =
    useGetSimulationGameQuery()
  const { data: sportGames, isLoading: isLoadingSport } = useGetSportGameQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        background="gray"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportGames}
        title="Esportes"
        background="black"
        id="sports"
        isLoading={isLoadingSport}
      />
      <ProductsList
        games={simultionGames}
        title="Simulação"
        background="gray"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        games={figthGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFigth}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Categories
