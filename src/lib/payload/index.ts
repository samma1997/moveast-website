/**
 * Server-side Local API client.
 * Usato da Server Components per leggere dati Payload senza HTTP round-trip.
 */

import { getPayload } from "payload";
import configPromise from "@payload-config";

export const getPayloadClient = async () => {
  return await getPayload({ config: configPromise });
};
