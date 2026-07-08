import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      return getNotice(id, res);

    case "PUT":
      return updateNotice(id, req, res);

    case "DELETE":
      return deleteNotice(id, res);

    default:
      return res.status(405).json({
        message: "Method Not Allowed",
      });
  }
}

async function getNotice(id, res) {
  try {
    const notice = await prisma.notice.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!notice) {
      return res.status(404).json({
        message: "Notice not found",
      });
    }

    return res.status(200).json(notice);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

async function updateNotice(id, req, res) {
  try {
    const {
      title,
      body,
      category,
      priority,
      publishDate,
      image,
    } = req.body;

    // Server-side validation
    if (!title || !body || !publishDate) {
      return res.status(400).json({
        message: "Title, body and publishDate are required.",
      });
    }

    const updatedNotice = await prisma.notice.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        body,
        category,
        priority: Boolean(priority),
        publishDate: new Date(publishDate),
        image: image || null,
      },
    });

    return res.status(200).json(updatedNotice);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

async function deleteNotice(id, res) {
  try {
    await prisma.notice.delete({
      where: {
        id: Number(id),
      },
    });

    return res.status(200).json({
      message: "Notice deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}