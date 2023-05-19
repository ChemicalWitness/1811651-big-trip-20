import Model from './model.js';
import points from '../data/points.json';
import destionations from '../data/destionations.json';
import offerGroups from '../data/offers.json';

class AppModel extends Model {
  #points = points;
  #destinations = destinations;
  #offerGroups = offerGroups;

  /**
   * @return {Array<Point>}
   */
  getPoints() {
    return this.#points.map(AppModel.adaptPointForClient);
  }

  /**
   * @return {Array<Destination>}
   */
  getDestionations() {
    return structuredClone(this.#destionations);
  }

  /**
   * @return {Array<OfferGroup>}
   */
  getOfferGroups() {
    // @ts-ignore
    return structuredClone(this.#offerGroups);
  }

  /**
   * @param {PointInSnakeCase} point
   * @return {Point}
   */

  static adaptPointForClient(point) {
    return {
      id: point.id,
      type: point.type,
      destinationId: point.destination,
      startDateTime: point.date_from,
      endDateTime: point.date_to,
      basePrice: point.base_price,
      offerIds: point.offers,
      isFavorite: point.is_favorite
    };
  }
}

export default AppModel;
