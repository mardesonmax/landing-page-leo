"use client";

import * as React from "react";
import Image from "next/image";
import { useTranslation } from "@/translation/client";
import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Acceptance Terms Table Types
type AcceptanceTermsRow = {
  metric: string;
  month1: string;
  month2: string;
  month3: string;
  isNegative?: boolean;
};

// Delivery Metrics Table Types
type DeliveryMetricsRow = {
  task: string;
  devTime: string;
  qaTime: string;
  designTime: string;
  total: string;
};

export default function UnifiedSalesEngineCase() {
  const { t } = useTranslation({ ns: "translation" });
  const base = "home.caseStudies.unified-sales-engine";

  // Acceptance Terms Data
  const acceptanceTermsData: AcceptanceTermsRow[] = [
    { metric: "Acceptance terms", month1: "874", month2: "814", month3: "689" },
    {
      metric: "Acceptance terms approved",
      month1: "242",
      month2: "242",
      month3: "245",
    },
    {
      metric: "Acceptance terms below minimum price",
      month1: "78",
      month2: "98",
      month3: "183",
    },
    {
      metric: "Sales opportunity value",
      month1: "R$ 381.267,00",
      month2: "R$ 295.065,00",
      month3: "R$ 334.154,00",
    },
    {
      metric: "Consolidated sales",
      month1: "R$ 280.599,00",
      month2: "R$ 215.932,00",
      month3: "R$ 226.810,00",
    },
    {
      metric: "Opportunity - Consolidated difference",
      month1: "-R$ 100.788,00",
      month2: "-R$ 79.133,00",
      month3: "-R$ 107.361,00",
      isNegative: true,
    },
    {
      metric: "Acceptance terms without setup fees",
      month1: "150",
      month2: "133",
      month3: "60",
    },
    {
      metric: "Generated setup fee value",
      month1: "R$ 307.704,00",
      month2: "R$ 239.010,00",
      month3: "R$ 262.482,00",
    },
    {
      metric: "Unbilled setup fee value",
      month1: "R$ 264.105,00",
      month2: "R$ 134.280,00",
      month3: "R$ 101.344,00",
      isNegative: true,
    },
  ];

  const acceptanceTermsColumns: ColumnDef<AcceptanceTermsRow>[] = [
    {
      accessorKey: "metric",
      header: "",
      cell: ({ row }) => (
        <div className="text-[10px] font-medium text-white/40">
          {row.getValue("metric")}
        </div>
      ),
    },
    {
      accessorKey: "month1",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-auto p-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 hover:bg-transparent hover:text-white/40"
          >
            12/2022
          </Button>
        );
      },
      cell: ({ row }) => {
        const isNegative = row.original.isNegative;
        return (
          <div
            className={`text-[10px] text-center ${
              isNegative ? "text-red-400" : "text-white/60"
            }`}
          >
            {row.getValue("month1")}
          </div>
        );
      },
    },
    {
      accessorKey: "month2",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-auto p-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 hover:bg-transparent hover:text-white/40"
          >
            01/2023
          </Button>
        );
      },
      cell: ({ row }) => {
        const isNegative = row.original.isNegative;
        return (
          <div
            className={`text-[10px] text-center ${
              isNegative ? "text-red-400" : "text-white/60"
            }`}
          >
            {row.getValue("month2")}
          </div>
        );
      },
    },
    {
      accessorKey: "month3",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-auto p-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 hover:bg-transparent hover:text-white/40"
          >
            02/2023
          </Button>
        );
      },
      cell: ({ row }) => {
        const isNegative = row.original.isNegative;
        return (
          <div
            className={`text-[10px] text-center ${
              isNegative ? "text-red-400" : "text-white/60"
            }`}
          >
            {row.getValue("month3")}
          </div>
        );
      },
    },
  ];

  // Delivery Metrics Data
  const deliveryMetricsData: DeliveryMetricsRow[] = [
    {
      task: t(
        `${base}.sections.initialResearch.images.deliveryMetrics.tasks.addingNewProduct`
      ),
      devTime: "22:09",
      qaTime: "7:42",
      designTime: "13:15",
      total: "43:06",
    },
    {
      task: t(
        `${base}.sections.initialResearch.images.deliveryMetrics.tasks.productEdits`
      ),
      devTime: "20:18",
      qaTime: "5:00",
      designTime: "8:24",
      total: "33:42",
    },
  ];

  const deliveryMetricsColumns: ColumnDef<DeliveryMetricsRow>[] = [
    {
      accessorKey: "task",
      header: "",
      cell: ({ row }) => (
        <div className="text-[10px] font-medium text-white/40">
          {row.getValue("task")}
        </div>
      ),
    },
    {
      accessorKey: "devTime",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-auto p-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 hover:bg-transparent hover:text-white/40"
          >
            Dev time (hours)
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="text-[10px] text-white/60 text-center">
          {row.getValue("devTime")}
        </div>
      ),
    },
    {
      accessorKey: "qaTime",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-auto p-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 hover:bg-transparent hover:text-white/40"
          >
            QA time (hours)
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="text-[10px] text-white/60 text-center">
          {row.getValue("qaTime")}
        </div>
      ),
    },
    {
      accessorKey: "designTime",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-auto p-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 hover:bg-transparent hover:text-white/40"
          >
            Design time (hour)
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="text-[10px] text-white/60 text-center">
          {row.getValue("designTime")}
        </div>
      ),
    },
    {
      accessorKey: "total",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-auto p-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 hover:bg-transparent hover:text-white/40"
          >
            Total (hour)
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="text-[10px] font-semibold text-white text-center">
          {row.getValue("total")}
        </div>
      ),
    },
  ];

  const acceptanceTermsTable = useReactTable({
    data: acceptanceTermsData,
    columns: acceptanceTermsColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const deliveryMetricsTable = useReactTable({
    data: deliveryMetricsData,
    columns: deliveryMetricsColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  // Financial Leakage Chart Data
  const financialLeakageData = [
    { category: "Waived", value: 67.3, color: "#FE5F58" },
    { category: "Discounts", value: 30.9, color: "#E48E8B" },
    { category: "Maintence", value: 1.8, color: "#CEC0C0" },
  ];

  const financialLeakageChartConfig = {
    value: {
      label: "Percentage",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <div className="text-white">
      <div className="mx-auto w-full max-w-[1398px] px-4 pt-10">
        <h1 className="text-[56px] font-bold leading-normal text-white">
          {t(`${base}.hero.title`)}
        </h1>

        <p className="mt-2 max-w-[980px] text-[12px] font-medium leading-normal text-[#BFC4CE]">
          {t(`${base}.hero.intro`)}
        </p>

        {/* Meta row */}
        <div className="mt-6 flex w-full overflow-hidden">
          {[
            {
              label: t(`${base}.meta.year.label`),
              value: t(`${base}.meta.year.value`),
            },
            {
              label: t(`${base}.meta.role.label`),
              value: t(`${base}.meta.role.value`),
            },
            {
              label: t(`${base}.meta.segment.label`),
              value: t(`${base}.meta.segment.value`),
            },
            {
              label: t(`${base}.meta.client.label`),
              value: t(`${base}.meta.client.value`),
            },
            {
              label: t(`${base}.meta.impact.label`),
              value: t(`${base}.meta.impact.value`),
            },
          ].map((item, idx, arr) => (
            <div
              key={item.label}
              className={[
                "flex h-[97px] flex-1 flex-col justify-center gap-2 px-4",
                idx !== arr.length - 1 ? "border-r border-[#BFC4CE]/30" : "",
              ].join(" ")}
            >
              <div className="text-[12px] font-medium leading-normal text-[#BFC4CE]">
                {item.label}
              </div>
              <div className="text-[14px] font-semibold leading-normal text-white">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Cover */}
        <div className="relative mt-20 w-full overflow-hidden bg-gray-750">
          <div className="relative h-[min(400px,40vh)] w-full">
            <Image
              src="/assets/img/case-cover.png"
              alt={t(`${base}.cover.alt`)}
              fill
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-gray-850 to-transparent" />
          </div>
        </div>
      </div>

      {/* Case content */}
      <div className=" bg-gray-750 py-12">
        <div className="mx-auto w-full max-w-[1398px] space-y-14 px-4 ">
          {/* Overview */}
          <section className="space-y-6">
            <h2 className="py-[17px] text-[32px] font-semibold leading-normal text-white">
              {t(`${base}.sections.overview.title`)}
            </h2>
            <div className="space-y-4 text-[12px] font-medium leading-normal text-[#BFC4CE]">
              <p>{t(`${base}.sections.overview.p1`)}</p>
              <p>{t(`${base}.sections.overview.p2`)}</p>
              <p>{t(`${base}.sections.overview.p3`)}</p>
              <p>{t(`${base}.sections.overview.p4`)}</p>
            </div>
          </section>
          {/* AS-IS */}
          <section className="space-y-6">
            <h2 className="py-[17px] text-[32px] font-semibold leading-normal text-white">
              {t(`${base}.sections.asIs.title`)}
            </h2>

            <div className="space-y-4 text-[12px] font-medium leading-normal text-[#BFC4CE]">
              <p>{t(`${base}.sections.asIs.p1`)}</p>
              <p>{t(`${base}.sections.asIs.l1`)}</p>
              <p>{t(`${base}.sections.asIs.l2`)}</p>
              <p>{t(`${base}.sections.asIs.l3`)}</p>
              <p>{t(`${base}.sections.asIs.p2`)}</p>
              <p>{t(`${base}.sections.asIs.p3`)}</p>
            </div>

            {/* Card: Using the software */}
            <div className="mx-auto w-full max-w-[1160px] rounded-2xl bg-gray-800 p-12">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-6">
                <div className="flex flex-col">
                  <figure>
                    <div className="relative h-[236px] w-full overflow-hidden rounded-xl bg-gray-850 lg:w-[401px]">
                      <Image
                        src="/assets/img/using-soft.png"
                        alt={t(`${base}.sections.asIs.card.imageAlt`)}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </figure>
                  <div className="mt-2 text-center text-[12px] font-medium leading-normal text-[#BFC4CE]">
                    {t(`${base}.sections.asIs.card.caption`)}
                  </div>
                </div>

                <div className="flex flex-1 flex-col">
                  <div className="text-[24px] font-semibold leading-normal text-white">
                    {t(`${base}.sections.asIs.card.title`)}
                  </div>
                  <div className="mt-4 space-y-4 text-[12px] font-medium leading-normal text-[#BFC4CE]">
                    <p>{t(`${base}.sections.asIs.card.steps.p1`)}</p>
                    <p>{t(`${base}.sections.asIs.card.steps.p2`)}</p>
                    <p>{t(`${base}.sections.asIs.card.steps.p3`)}</p>
                    <p>{t(`${base}.sections.asIs.card.steps.p4`)}</p>
                    <p>{t(`${base}.sections.asIs.card.steps.p5`)}</p>
                    <p>{t(`${base}.sections.asIs.card.steps.p6`)}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Initial research */}
          <section className="space-y-6">
            <h2 className="py-[17px] text-[32px] font-semibold leading-normal text-white">
              {t(`${base}.sections.initialResearch.title`)}
            </h2>

            <div className="space-y-4 text-[12px] font-medium leading-normal text-[#BFC4CE]">
              <p>{t(`${base}.sections.initialResearch.p1`)}</p>
              <p>{t(`${base}.sections.initialResearch.p2`)}</p>
              <p>{t(`${base}.sections.initialResearch.p3`)}</p>
              <p>{t(`${base}.sections.initialResearch.p4`)}</p>
              <p>{t(`${base}.sections.initialResearch.p5`)}</p>
            </div>

            {/* Acceptance Terms Table */}
            <div className="mx-auto">
              <figure className="overflow-hidden rounded-2xl bg-gray-800 p-4 max-w-[887px] mx-auto">
                <div className="overflow-hidden rounded-md border border-white/10 ">
                  <Table>
                    <TableHeader>
                      {acceptanceTermsTable
                        .getHeaderGroups()
                        .map((headerGroup) => (
                          <TableRow
                            key={headerGroup.id}
                            className="border-white/10 hover:bg-transparent"
                          >
                            {headerGroup.headers.map((header) => {
                              const isLeftAligned =
                                header.id === "metric" || header.id === "task";
                              return (
                                <TableHead
                                  key={header.id}
                                  className={`text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 ${
                                    isLeftAligned ? "" : "text-center"
                                  }`}
                                >
                                  {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                      )}
                                </TableHead>
                              );
                            })}
                          </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                      {acceptanceTermsTable.getRowModel().rows?.length ? (
                        acceptanceTermsTable.getRowModel().rows.map((row) => (
                          <TableRow
                            key={row.id}
                            className="border-white/10 hover:bg-white/5"
                          >
                            {row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id} className="p-4">
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell
                            colSpan={acceptanceTermsColumns.length}
                            className="h-24 text-center"
                          >
                            {t("commons.table.noResults")}
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
                <figcaption className="px-4 py-3 text-center text-[12px] font-medium leading-normal text-[#BFC4CE]">
                  {t(
                    `${base}.sections.initialResearch.images.acceptanceTerms.caption`
                  )}
                </figcaption>
              </figure>
            </div>

            {/* Delivery Metrics Table */}
            <div className="">
              <p className="mb-4 text-[12px] font-medium leading-normal text-[#BFC4CE]">
                {t(
                  `${base}.sections.initialResearch.images.deliveryMetrics.description`
                )}
              </p>

              <figure className="overflow-hidden rounded-2xl bg-gray-800 p-4 max-w-[887px] mx-auto">
                <div className="overflow-hidden rounded-md border border-white/10">
                  <Table>
                    <TableHeader>
                      {deliveryMetricsTable
                        .getHeaderGroups()
                        .map((headerGroup) => (
                          <TableRow
                            key={headerGroup.id}
                            className="border-white/10 hover:bg-transparent"
                          >
                            {headerGroup.headers.map((header) => {
                              const isLeftAligned =
                                header.id === "metric" || header.id === "task";
                              return (
                                <TableHead
                                  key={header.id}
                                  className={`text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 ${
                                    isLeftAligned ? "" : "text-center"
                                  }`}
                                >
                                  {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                      )}
                                </TableHead>
                              );
                            })}
                          </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                      {deliveryMetricsTable.getRowModel().rows?.length ? (
                        deliveryMetricsTable.getRowModel().rows.map((row) => (
                          <TableRow
                            key={row.id}
                            className="border-white/10 hover:bg-white/5"
                          >
                            {row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id} className="p-4">
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell
                            colSpan={deliveryMetricsColumns.length}
                            className="h-24 text-center"
                          >
                            {t("commons.table.noResults")}
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
                <figcaption className="px-4 py-3 text-center text-[12px] font-medium leading-normal text-[#BFC4CE]">
                  {t(
                    `${base}.sections.initialResearch.images.deliveryMetrics.caption`
                  )}
                </figcaption>
              </figure>
            </div>
          </section>

          {/* Understanding */}
          <section className="space-y-6">
            <h2 className="py-[17px] text-[32px] font-semibold leading-normal text-white">
              {t(`${base}.sections.understanding.title`)}
            </h2>
            <div className="space-y-4 text-[12px] font-medium leading-normal text-[#BFC4CE]">
              <p>{t(`${base}.sections.understanding.p1`)}</p>
            </div>

            <figure className="overflow-hidden max-w-[921px] mx-auto bg-gray-800">
              <Image
                src="/assets/img/case-sales-journey.png"
                alt={t(`${base}.sections.understanding.journeyAlt`)}
                width={2000}
                height={1200}
                className="h-auto w-full object-cover"
              />
            </figure>
            <div className="space-y-4 text-[12px] font-medium leading-normal text-[#BFC4CE]">
              <p>{t(`${base}.sections.understanding.p2`)}</p>
            </div>
          </section>
          {/* Panel */}
          <section className="space-y-6">
            <div className="mx-auto w-full max-w-[1160px] rounded-2xl bg-gray-800 p-12">
              <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
                <div className="space-y-4">
                  <div className="text-[24px] font-semibold leading-normal text-white">
                    {t(`${base}.sections.panel.title`)}
                  </div>
                  <div className="space-y-4 text-[12px] font-medium leading-normal text-[#BFC4CE]">
                    <p>{t(`${base}.sections.panel.p1`)}</p>
                    <p>{t(`${base}.sections.panel.p2`)}</p>
                    <p>{t(`${base}.sections.panel.p3`)}</p>
                    <p>{t(`${base}.sections.panel.p4`)}</p>
                    <p>{t(`${base}.sections.panel.p5`)}</p>
                  </div>
                </div>

                <aside className="rounded-lg bg-gray-750 px-4 pb-4 pt-2">
                  <Card className="border-0 bg-transparent shadow-none">
                    <CardHeader className="p-0 pb-2.5">
                      <CardTitle className="text-[14px] font-bold leading-[1.5em] text-[#FE5F58]">
                        {t(`${base}.sections.panel.asideTitle`)}
                      </CardTitle>
                      <CardDescription className="mt-0 text-[14px] font-normal leading-[1.302em] text-[#BFC4CE]">
                        {t(`${base}.sections.panel.asideDescription`)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ChartContainer
                        config={financialLeakageChartConfig}
                        className="h-[340px] w-full"
                      >
                        <BarChart
                          accessibilityLayer
                          data={financialLeakageData}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                          barCategoryGap="24px"
                        >
                          <XAxis dataKey="category" hide />
                          <YAxis hide domain={[0, 100]} />
                          <ChartTooltip
                            cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
                            content={
                              <ChartTooltipContent
                                hideLabel
                                formatter={(value) => `${value}%`}
                                className="bg-gray-800 border-white/10 text-white"
                              />
                            }
                          />
                          <Bar
                            dataKey="value"
                            radius={[8, 8, 0, 0]}
                            barSize={66}
                          >
                            {financialLeakageData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 p-0 pt-2">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="h-[13px] w-[27px] rounded bg-[#FE5F58]" />
                          <span className="text-[12px] font-bold leading-[1.302em] text-[#BFC4CE]">
                            {t(`${base}.sections.panel.chartLegend.waivedFees`)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div className="h-[13px] w-[27px] rounded bg-[#E48E8B]" />
                          <span className="text-[12px] font-bold leading-[1.302em] text-[#BFC4CE]">
                            {t(`${base}.sections.panel.chartLegend.discounts`)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div className="h-[13px] w-[27px] rounded bg-[#CEC0C0]" />
                          <span className="text-[12px] font-bold leading-[1.302em] text-[#BFC4CE]">
                            {t(`${base}.sections.panel.chartLegend.maintence`)}
                          </span>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </aside>
              </div>
            </div>
          </section>
          {/* Solution */}
          <section className="space-y-6">
            <h2 className="py-[17px] text-[32px] font-semibold leading-normal text-white">
              {t(`${base}.sections.solution.title`)}
            </h2>

            <div className="space-y-4 text-[12px] font-medium leading-normal text-[#BFC4CE]">
              <p>{t(`${base}.sections.solution.p1`)}</p>
              <p>{t(`${base}.sections.solution.p2`)}</p>
              <p>{t(`${base}.sections.solution.p3`)}</p>
              <p>{t(`${base}.sections.solution.p4`)}</p>
            </div>

            <div className="mx-auto max-w-[1160px]">
              <div className="grid gap-6 lg:grid-cols-2">
                <figure className="overflow-hidden rounded-2xl bg-gray-800">
                  <Image
                    src="/assets/img/case-new-software.png"
                    alt={t(`${base}.sections.solution.images.newSoftware.alt`)}
                    width={1200}
                    height={900}
                    className="h-auto w-full object-cover"
                  />
                  <figcaption className="px-4 py-3 text-center text-[12px] font-medium leading-normal text-[#BFC4CE]">
                    {t(`${base}.sections.solution.images.newSoftware.caption`)}
                  </figcaption>
                </figure>

                <figure className="overflow-hidden rounded-2xl bg-gray-800">
                  <Image
                    src="/assets/img/case-portfolio-manager.png"
                    alt={t(
                      `${base}.sections.solution.images.portfolioManager.alt`
                    )}
                    width={1200}
                    height={900}
                    className="h-auto w-full object-cover"
                  />
                  <figcaption className="px-4 py-3 text-center text-[12px] font-medium leading-normal text-[#BFC4CE]">
                    {t(
                      `${base}.sections.solution.images.portfolioManager.caption`
                    )}
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
          {/* Conclusion */}
          <section className="space-y-6">
            <h2 className="py-[17px] text-[32px] font-semibold leading-normal text-white">
              {t(`${base}.sections.conclusion.title`)}
            </h2>

            <div className="space-y-4 text-[12px] font-medium leading-normal text-[#BFC4CE]">
              <p>{t(`${base}.sections.conclusion.p1`)}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
