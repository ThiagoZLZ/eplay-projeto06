import { Game } from '../../Pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import { formataPreco } from '../ProdutsList'

import { Banner2, Infos } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <Banner2 style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          {game.prices.discount && (
            <span>De {formataPreco(game?.prices.old)}</span>
          )}
          {game.prices.current && <>Por {formataPreco(game.prices.current)}</>}
        </p>
        {game.prices.current && (
          <Button
            type="button"
            title="Clique aqui para adicionar"
            variant="primary"
          >
            Adicionar ao carrinho
          </Button>
        )}
      </Infos>
    </div>
  </Banner2>
)

export default Hero
