import { colors } from '@junielson-ui/tokens'
import { getContrast } from 'polished'

export const ColorsGrid = () => {
  const getColorText = (color: string) => {
    return getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF'
  }

  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getColorText(color),
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
