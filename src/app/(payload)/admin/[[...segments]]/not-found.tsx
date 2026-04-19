/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import { NotFoundPage, generatePageMetadata } from "@payloadcms/next/views";
import configPromise from "@payload-config";
import { importMap } from "../importMap.js";

type Args = {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({ config: configPromise, params, searchParams });

const NotFound = ({ params, searchParams }: Args) =>
  NotFoundPage({ config: configPromise, params, searchParams, importMap });

export default NotFound;
