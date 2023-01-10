
import { NextPage } from 'next';
import { ProjectPageProps } from '../../pages/project/[geov_id]';
import AMPI_component from "./ampi/ampi";
import MaritimeHistory_component from './maritime-history/maritime-history';
import Processetti_component from "./processetti/processetti";
import EuroClimHist_component from "./euroclimhist/euroclimhist";
import RomasDeportation_component from "./romas-deportation/romas-deportation";


 interface Map {
    [key: number]:  NextPage<ProjectPageProps>
}
export const projectHomePageMap: Map = {
    // AMPI
    924033:  AMPI_component,

    // Maritime History
    84760:  MaritimeHistory_component,

    // Processetti
    591:  Processetti_component,

    // EuroClimHist
    6529336: EuroClimHist_component,

    // Roma's deportation
    3354801: RomasDeportation_component
};
