import { DomainPropType } from 'victory';
import { CustomBarGraph } from './CustomBarGraph';
import { FullPageContainer } from './FullPageContainer';
import './Home.scss'

const dataPoints: CustomDataPoint[] = [
  { x: 10, y: 20, size: 15, label: 'alpha' },
  { x: 20, y: 30, size: 10, label: 'beta' },
  { x: 30, y: 15, size: 30, label: 'delta' },
  { x: 40, y: 80, size: 85, label: 'eplison' },
  { x: 50, y: 7, size: 10, label: 'gamma' },
  { x: 60, y: 40, size: 65, label: 'zeta' },
  { x: 70, y: 45, size: 10, label: 'eta' },
  { x: 80, y: 27, size: 90, label: 'theta' },
  { x: 90, y: 70, size: 15, label: 'iota' },
  { x: 100, y: 5, size: 25, label: 'kappa' },
]

const domain: DomainPropType = {
  x: [0, 100],
  y: [0, 100],
}

export const Home = () => {
  return (
    <FullPageContainer>
      <main id="Home">
        <h1>HOME</h1>
        <CustomBarGraph data={dataPoints} domain={domain}/>
      </main>
    </FullPageContainer>
  );
}
