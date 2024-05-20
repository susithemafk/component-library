import { Avatar, AvatarProps } from 'component-library'
import Grid from './Grid/Grid'

const SRC = 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
const ALT = 'alt'

const Avatars = (): JSX.Element => {
    const generateAvatars = (avatars: AvatarProps[]): JSX.Element[] => {
        return avatars.map((avatar, index) => (
            <Avatar
                key={index}
                src={SRC}
                alt={ALT}
                size={avatar.size}
                shape={avatar.shape}
                shadow={avatar.shadow}
                border={avatar.border}>
                {avatar.children}
            </Avatar>
        ))
    }

    const sizeAvatars = (): AvatarProps[] => {
        const avatars: AvatarProps[] = [
            {
                size: 'small' as const,
                children: 'Small',
            },
            {
                size: 'medium' as const,
                children: 'Medium',
            },
            {
                size: 'large' as const,
                children: 'Large',
            },
        ].map((avatar) => ({ ...avatar, src: SRC, alt: ALT }))

        return avatars
    }

    const squareAvatars = (): AvatarProps[] =>
        sizeAvatars().map((avatar) => ({ ...avatar, shape: 'square' }))

    const shadowAvatars = (): AvatarProps[] =>
        sizeAvatars().map((avatar) => ({ ...avatar, shadow: true }))

    const borderAvatars = (): AvatarProps[] =>
        sizeAvatars().map((avatar) => ({ ...avatar, border: true }))

    return (
        <div className="avatars">
            <Grid items={generateAvatars(sizeAvatars())} title={`avatars`} />

            <Grid items={generateAvatars(squareAvatars())} title={`square avatars`} />

            <Grid items={generateAvatars(shadowAvatars())} title={`shadow avatars`} />

            <Grid items={generateAvatars(borderAvatars())} title={`border avatars`} />
        </div>
    )
}

export default Avatars
