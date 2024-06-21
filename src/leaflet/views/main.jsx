    import { LeafletContainer } from '../LeafletComponents/leaflet-container.jsx';
    import { LeafletMap } from '../LeafletComponents/leaflet-map.jsx';

    export const Main = () => {
        return (
            <div className="row">
                <div className="col">

                    <LeafletContainer>
                        <LeafletMap />
                    </LeafletContainer>
                </div>
            </div>
        );
    };
