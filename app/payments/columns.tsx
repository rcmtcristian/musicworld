'use client'

import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'

import { Button } from '../../client/src/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../../client/src/components/ui/dropdown-menu'
import { Badge } from '../../client/src/components/ui/badge'
import { Checkbox } from '../../client/src/components/ui/checkbox'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  artist: string[] | string
  image: string | 'pending' | 'processing' | 'success' | 'failed'
  name: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'image',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Images
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const artistImage = row.original

      return (
        <div>
          <img alt="" className=" h-14 rounded-sm " src={artistImage.image} />
        </div>
      )
    }
  },
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'artist',
    header: 'Fetched Artist',
    cell: ({ row }) => {
      const relatedArtist = row.original

      if (Array.isArray(relatedArtist.artist)) {
        return (
          <div>
            {relatedArtist.artist.map((artist, index) => (
              <Badge key={index} variant={'art'} onClick={() => navigator.clipboard.writeText(artist)}>
                {artist}
              </Badge>
            ))}
          </div>
        )
      }

      return null
    }
  },

  {
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-8 w-8 p-0" variant="ghost">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
              Copy Artist List
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Artist</DropdownMenuItem>
            <DropdownMenuItem>View Artist details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
