<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
    <body>
        <h2 style="text-align:center">Информация о специальности ИСиТ</h2>
        <table border="2" style="text-align:center" align="center">
            <tr bgcolor="Yellow">
                <th style="text-align:center">Университет</th>
                <th style="text-align:center">Балл</th>
                <th style="text-align:center">Количество мест</th>
                <th style="text-align:center">Город</th>
            </tr>
            <xsl:for-each select="Specialization/University">
            <tr bgcolor="aqua">
                <td><xsl:value-of select="Name"/></td>
                <td><xsl:value-of select="Point"/></td>
                <td><xsl:value-of select="Plan"/></td>
                <td><xsl:value-of select="City"/></td>
            </tr>
            </xsl:for-each>
        </table>
    </body>
</html>
</xsl:template>
</xsl:stylesheet>