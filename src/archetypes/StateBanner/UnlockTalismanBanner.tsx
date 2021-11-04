import bannerImage from '@assets/unlock-spirit-key.png'
import { Button } from '@components'
import { Banner } from '@components/Banner'
import { useTranslation } from 'react-i18next'

export const UnlockTalismanBanner = props => {
  const { t, ready } = useTranslation('banners')
  if (!ready) {
    return null
  }
  return (
    <Banner backgroundImage={bannerImage} {...props}>
      <div className="description">
        <h1>{t('unlockTalisman.header')}</h1>
        <p>{t('unlockTalisman.description')}</p>
      </div>
      <div className="cta">
        <Button primary>{t('unlockTalisman.primaryCta')}</Button>
      </div>
    </Banner>
  )
}
