import { useState } from 'react'

import Section from '../Section'

import { Itens, Item, Action, Modal, ModalContant } from './styles'

import gta4 from '../../assets/images/gta4.jpg'
import hogwarts from '../../assets/images/fundo_hogwarts.png'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'

import { GalleryItem } from '../../Pages/Home'

const mock: GalleryItem[] = [
  {
    type: 'imagem',
    url: gta4
  },
  {
    type: 'imagem',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/pXm9qoxtneI?si=go93fzp-aqfp3ZbX'
  }
]

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  estaVisivel: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    estaVisivel: false,
    type: 'imagem',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'imagem') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'imagem') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      estaVisivel: false,
      type: 'imagem',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Itens>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  estaVisivel: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} do ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="clique para maximar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Itens>
      </Section>
      <Modal className={modal.estaVisivel ? 'visivel' : ''}>
        <ModalContant className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="Ícone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'imagem' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContant>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
