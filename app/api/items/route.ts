import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Item } from '@prisma/client';
import Cors from 'cors';

const prisma = new PrismaClient();
const cors = Cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);

  try {
    switch (req.method) {
      case 'GET':
        const items: Item[] = await prisma.item.findMany();
        return res.status(200).json(items);

      case 'POST':
        const { name, description } = req.body;
        if (!name || !description) {
          return res.status(400).json({ error: 'Name and description are required' });
        }
        const newItem: Item = await prisma.item.create({
          data: { name, description },
        });
        return res.status(201).json(newItem);

      case 'PUT':
        const { id, updateName, updateDescription } = req.body;
        if (!id || (!updateName && !updateDescription)) {
          return res.status(400).json({ error: 'ID and at least one field to update are required' });
        }
        const updatedItem: Item = await prisma.item.update({
          where: { id },
          data: { name: updateName, description: updateDescription },
        });
        return res.status(200).json(updatedItem);

      case 'DELETE':
        const { deleteId } = req.body;
        if (!deleteId) {
          return res.status(400).json({ error: 'ID is required for deletion' });
        }
        await prisma.item.delete({
          where: { id: deleteId },
        });
        return res.status(204).end();

      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default handler;