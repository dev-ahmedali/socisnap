'use client'

interface DesktopItemProps {
    label: string
    icon: any
    href: string
    onClick: () => void
    active?: boolean
}

const DesktopItem:React.FC<DesktopItemProps> = ({
    label,
    icon,
    href,
    onClick,
    active
}) => {
    return (
        <div>Desktop Item</div>
    )
}

export default DesktopItem