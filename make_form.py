from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

pdfmetrics.registerFont(TTFont("Arial", "/System/Library/Fonts/Supplemental/Arial.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Bold", "/System/Library/Fonts/Supplemental/Arial Bold.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Italic", "/System/Library/Fonts/Supplemental/Arial Italic.ttf"))
pdfmetrics.registerFont(TTFont("Arial-BoldItalic", "/System/Library/Fonts/Supplemental/Arial Bold Italic.ttf"))

W, H = letter  # 612 x 792

def checkbox(c, x, y, size=9):
    c.rect(x, y, size, size)

def line(c, x1, y1, x2, y2, width=0.75):
    c.setLineWidth(width)
    c.line(x1, y1, x2, y2)

def make_form(path):
    c = canvas.Canvas(path, pagesize=letter)
    margin = 0.85 * inch
    right = W - margin
    width = right - margin

    y = H - 0.75 * inch

    # ── Header ───────────────────────────────────────────────────────
    c.setFont("Arial-Bold", 14)
    c.drawString(margin, y, "YES, I support Measures 2-143, 2-144, 2-145, and 2-146 that")
    y -= 0.26 * inch
    c.drawString(margin, y, "Good Governance Corvallis is working to pass.")
    y -= 0.36 * inch

    # ── Volunteer checkboxes ─────────────────────────────────────────
    c.setFont("Arial", 11)
    c.drawString(margin, y, "I will help by:")
    y -= 0.25 * inch

    items = [
        "Writing a letter to the editor",
        "Distributing literature in my neighborhood",
        "Inviting my social network group(s) to support the campaign",
    ]
    for item in items:
        checkbox(c, margin, y - 1, 9)
        c.drawString(margin + 0.2 * inch, y, item)
        y -= 0.22 * inch

    # Other with line
    checkbox(c, margin, y - 1, 9)
    c.drawString(margin + 0.2 * inch, y, "Other ")
    line(c, margin + 0.75 * inch, y - 1, right, y - 1)
    y -= 0.36 * inch

    # ── Name-use checkbox ─────────────────────────────────────────────
    checkbox(c, margin, y - 1, 9)
    c.setFont("Arial", 11)
    c.drawString(margin + 0.2 * inch, y, "You may include my name as a supporter in campaign materials,")
    y -= 0.22 * inch
    c.drawString(margin + 0.2 * inch, y, "advertisements, and other outreach efforts.")
    y -= 0.42 * inch

    # ── Contribution section ──────────────────────────────────────────
    c.setFont("Arial", 11)
    c.drawString(margin, y, "Enclosed is my contribution of: ")
    line(c, margin + 2.4 * inch, y - 1, margin + 3.8 * inch, y - 1)
    y -= 0.2 * inch
    c.setFont("Arial-Italic", 10)
    c.drawString(margin, y, "Please make checks payable to GOOD GOVERNANCE CORVALLIS")
    y -= 0.32 * inch

    # Amount checkboxes
    c.setFont("Arial", 11)
    amounts = ["$50", "$100", "$250", "$500", "$1,000", "Other"]
    x = margin
    for amt in amounts:
        checkbox(c, x, y - 1, 9)
        c.drawString(x + 0.18 * inch, y, amt)
        x += 0.82 * inch
    # line after "Other"
    line(c, x - 0.08 * inch, y - 1, x + 0.45 * inch, y - 1)
    y -= 0.42 * inch

    # ── Contact fields ────────────────────────────────────────────────
    def field_line(label, x_start, x_end, y_pos, label2=None, x_mid=None):
        c.setFont("Arial", 11)
        c.drawString(x_start, y_pos, label)
        lw = c.stringWidth(label, "Arial", 11)
        x1 = x_start + lw + 2
        if label2 and x_mid:
            line(c, x1, y_pos - 1, x_mid - 0.15 * inch, y_pos - 1)
            c.drawString(x_mid, y_pos, label2)
            lw2 = c.stringWidth(label2, "Arial", 11)
            line(c, x_mid + lw2 + 2, y_pos - 1, x_end, y_pos - 1)
        else:
            line(c, x1, y_pos - 1, x_end, y_pos - 1)

    field_line("Name ", margin, right, y)
    y -= 0.26 * inch
    field_line("Telephone ", margin, margin + 2.1 * inch, y, "Email ", margin + 2.2 * inch)
    # extend email line to right
    lw = c.stringWidth("Email ", "Arial", 11)
    line(c, margin + 2.2 * inch + lw + 2, y - 1, right, y - 1)
    y -= 0.26 * inch
    field_line("Address ", margin, right, y)
    y -= 0.26 * inch
    field_line("City ", margin, margin + 3.0 * inch, y)
    c.drawString(margin + 3.1 * inch, y, "State ")
    lw = c.stringWidth("State ", "Arial", 11)
    line(c, margin + 3.1 * inch + lw + 2, y - 1, margin + 4.1 * inch, y - 1)
    c.drawString(margin + 4.2 * inch, y, "Zip ")
    lw2 = c.stringWidth("Zip ", "Arial", 11)
    line(c, margin + 4.2 * inch + lw2 + 2, y - 1, right, y - 1)
    y -= 0.26 * inch
    field_line("Occupation (required by law) ", margin, right, y)
    y -= 0.26 * inch
    field_line("Employer (required by law) ", margin, right, y)
    y -= 0.26 * inch
    field_line("Employer City and State (required by law) ", margin, right, y)
    y -= 0.42 * inch

    # ── Thank you ─────────────────────────────────────────────────────
    c.setFont("Arial-BoldItalic", 12)
    text = "Thank you for your support of Good Governance For A Better Corvallis!"
    c.drawCentredString(W / 2, y, text)
    y -= 0.38 * inch

    # ── Mail to ───────────────────────────────────────────────────────
    c.setFont("Arial-Bold", 10.5)
    c.drawCentredString(W / 2, y, "Mail completed form and contribution to:")
    y -= 0.22 * inch
    c.setFont("Arial", 10.5)
    c.drawCentredString(W / 2, y, "Good Governance Corvallis")
    y -= 0.19 * inch
    c.drawCentredString(W / 2, y, "2834 NW Rolling Green Drive, Corvallis, OR 97330")
    y -= 0.32 * inch

    # ── Legal footer ──────────────────────────────────────────────────
    c.setFont("Arial", 8)
    c.drawCentredString(W / 2, y,
        "Authorized and paid for by Good Governance Corvallis, A Political Action Committee (ID:24834)")
    y -= 0.17 * inch
    c.drawCentredString(W / 2, y, "2834 Rolling Green Drive, Corvallis, OR 97330")

    c.save()

make_form("/Users/brennancolberg/Code/cvochartermay26/website/donate-form-nosig.pdf")
print("Done")
