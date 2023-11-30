export type addressType = {
  street: string,
  suit: string,
  city: string,
}

export type contactType = {
  name: string,
  email: string,
  address: addressType,
}

export type postType = {
  title: string,
  body: string
}