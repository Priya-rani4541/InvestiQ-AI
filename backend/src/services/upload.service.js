export const uploadPDFService = async (file) => {

  const hash = crypto
      .createHash("sha256")
      .update(file.filename)
      .digest("hex");

  if (isDocumentIndexed(hash)) {

      return {

          alreadyIndexed: true,

          fileName: file.filename,

      };

  }

  const indexed = await indexPDF(file.path);

  registerDocument({

      hash,

      fileName: file.filename,

      filePath: file.path,

      chunkCount: indexed.chunkCount,

      vectorCount: indexed.vectorCount,

      indexedAt: new Date(),

  });

  return {

      success: true,

      alreadyIndexed: false,

      ...indexed,

  };

};