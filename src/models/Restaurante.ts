class Restaurante {
  image: string
  title: string
  titleNota: string
  imgNota: string
  category: string
  description: string
  id: number

  constructor(
    image: string,
    title: string,
    titleNota: string,
    imgNota: string,
    category: string,
    description: string,
    id: number
  ) {
    this.id = id
    this.description = description
    this.category = category
    this.imgNota = imgNota
    this.titleNota = titleNota
    this.title = title
    this.image = image
  }
}

export default Restaurante
