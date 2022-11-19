export interface PalletsProps {
  'yellow-dark': string
  yellow: string
  'yellow-light': string
  'purple-dark': string
  purple: string
  'purple-light': string
  'base-title': string
  'base-subtitle': string
  'base-text': string
  'base-label': string
  'base-hover': string
  'base-button': string
  'base-input': string
  'base-card': string
  'base-background': string
  white: string
}

export const Pallets: PalletsProps = {
  'yellow-dark': '#c47f15',
  yellow: '#DBAC2C',
  'yellow-light': '#F1E9C9',
  'purple-dark': '#4B2995',
  purple: '#8047F8',
  'purple-light': '#EBE5F9',
  'base-title': '#272221',
  'base-subtitle': '#403937',
  'base-text': '#574F4D',
  'base-label': '#8D8686',
  'base-hover': '#D7D5D5',
  'base-button': '#E6E5E5',
  'base-input': '#EDEDED',
  'base-card': '#F3F2F2',
  'base-background': '#FAFAFA',
  white: '#FFF',
}

export const defaultTheme = {
  default: {
    header: {
      font: {
        family: 'Baloo 2, cursive',
        size: {
          small: '1.125rem',
          medium: '1.25rem',
          large: '2rem',
          xlarge: '3rem',
        },
      },
    },
    text: {
      font: {
        family: 'Roboto, sans-serif',
        size: {
          tiny: '0.625rem',
          xsmall: '0.75rem',
          small: '0.875rem',
          regular: '1rem',
          medium: '1.125rem',
          large: '1.25rem',
          xlarge: '1.5rem',
        },
      },
    },
    pallet: Pallets,
  },
}
