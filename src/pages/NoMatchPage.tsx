import React from 'react'
import { Column, Page } from 'ui/Containers'
import { Title } from 'ui/Typography'

const NoMatchPage: React.FC = () => {
  return (
    <Page>
      <Column alignItems="center" justifyContent="center">
        <Title>Ooops, that page doesn&apos;t exist.</Title>
      </Column>
    </Page>
  )
}

export default NoMatchPage
