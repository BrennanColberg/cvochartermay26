from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

pdfmetrics.registerFont(TTFont("Arial", "/System/Library/Fonts/Supplemental/Arial.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Bold", "/System/Library/Fonts/Supplemental/Arial Bold.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Italic", "/System/Library/Fonts/Supplemental/Arial Italic.ttf"))
pdfmetrics.registerFont(TTFont("Arial-BoldItalic", "/System/Library/Fonts/Supplemental/Arial Bold Italic.ttf"))

W, H = letter
BODY = 11
GAP  = 0.27 * inch

def hline(c, x1, y, x2):
    c.setLineWidth(0.75)
    c.line(x1, y, x2, y)

def checkbox(c, x, y, size=9):
    c.setLineWidth(0.75)
    c.rect(x, y, size, size, stroke=1, fill=0)

def make_form(path):
    c = canvas.Canvas(path, pagesize=letter)
    margin = 0.85 * inch
    right  = W - margin
    cx     = W / 2

    y = H - 0.75 * inch

    # ── Header ───────────────────────────────────────────────────────
    c.setFont("Arial-Bold", 14)
    c.drawString(margin, y, "YES, I support Measures 2-143, 2-144, 2-145, and 2-146 that")
    y -= 0.27 * inch
    c.drawString(margin, y, "Good Governance Corvallis is working to pass.")
    y -= 0.40 * inch

    # ── Volunteer checkboxes ─────────────────────────────────────────
    c.setFont("Arial", BODY)
    c.drawString(margin, y, "I will help by:")
    y -= GAP

    for item in [
        "Writing a letter to the editor",
        "Distributing literature in my neighborhood",
        "Inviting my social network group(s) to support the campaign",
    ]:
        checkbox(c, margin, y - 1)
        c.drawString(margin + 0.20 * inch, y, item)
        y -= GAP

    checkbox(c, margin, y - 1)
    c.drawString(margin + 0.20 * inch, y, "Other")
    lw = c.stringWidth("Other", "Arial", BODY)
    hline(c, margin + 0.20 * inch + lw + 4, y - 1, right)
    y -= 0.38 * inch

    # ── Name-use checkbox ─────────────────────────────────────────────
    checkbox(c, margin, y - 1)
    c.setFont("Arial", BODY)
    c.drawString(margin + 0.20 * inch, y, "You may include my name as a supporter in campaign materials,")
    y -= GAP
    c.drawString(margin + 0.20 * inch, y, "advertisements, and other outreach efforts.")
    y -= 0.40 * inch

    # ── Contribution section ──────────────────────────────────────────
    c.setFont("Arial", BODY)
    label = "Enclosed is my contribution of:"
    c.drawString(margin, y, label)
    lw = c.stringWidth(label, "Arial", BODY)
    hline(c, margin + lw + 6, y - 1, margin + lw + 6 + 1.3 * inch)
    y -= GAP - 0.04 * inch

    c.setFont("Arial-Italic", 10)
    c.drawString(margin, y, "Please make checks payable to GOOD GOVERNANCE CORVALLIS")
    y -= 0.34 * inch

    # Amount checkboxes
    c.setFont("Arial", BODY)
    amounts = ["$50", "$100", "$250", "$500", "$1,000", "Other"]
    slot = (right - margin) / len(amounts)
    for i, amt in enumerate(amounts):
        x = margin + i * slot
        checkbox(c, x, y - 1)
        c.drawString(x + 0.18 * inch, y, amt)
    last_x = margin + (len(amounts) - 1) * slot
    lw = c.stringWidth("Other", "Arial", BODY)
    hline(c, last_x + 0.18 * inch + lw + 4, y - 1, last_x + slot - 0.05 * inch)
    y -= 0.40 * inch

    # ── Contact fields ────────────────────────────────────────────────
    def field(label, x0, x1, yp):
        c.setFont("Arial", BODY)
        c.drawString(x0, yp, label)
        lw = c.stringWidth(label, "Arial", BODY)
        hline(c, x0 + lw + 3, yp - 1, x1)

    field("Name", margin, right, y);  y -= GAP + 0.04 * inch

    tel_end = margin + 2.1 * inch
    field("Telephone", margin, tel_end, y)
    field("Email", tel_end + 0.18 * inch, right, y)
    y -= GAP + 0.04 * inch

    field("Address", margin, right, y);  y -= GAP + 0.04 * inch

    city_end  = margin + 2.8 * inch
    state_end = city_end + 0.75 * inch
    field("City",  margin,                   city_end,  y)
    field("State", city_end  + 0.12 * inch, state_end, y)
    field("Zip",   state_end + 0.12 * inch, right,     y)
    y -= GAP + 0.04 * inch

    field("Occupation (required by law)", margin, right, y);  y -= GAP + 0.04 * inch
    field("Employer (required by law)",   margin, right, y);  y -= GAP + 0.04 * inch
    field("Employer City and State (required by law)", margin, right, y)
    y -= 0.45 * inch

    # ── Thank you ─────────────────────────────────────────────────────
    c.setFont("Arial-BoldItalic", 12)
    c.drawCentredString(cx, y, "Thank you for your support of Good Governance For A Better Corvallis!")
    y -= 0.38 * inch

    # ── Mail to ───────────────────────────────────────────────────────
    c.setFont("Arial-Bold", 10.5)
    c.drawCentredString(cx, y, "Mail completed form and contribution to:")
    y -= 0.24 * inch
    c.setFont("Arial", 10.5)
    c.drawCentredString(cx, y, "Good Governance Corvallis  |  2834 NW Rolling Green Drive, Corvallis, OR 97330")

    # ── Legal — pinned to very bottom ────────────────────────────────
    c.setFont("Arial", 8)
    c.drawCentredString(cx, 0.45 * inch,
        "Authorized and paid for by Good Governance Corvallis, A Political Action Committee (#24834)")

    c.save()

make_form("/Users/brennancolberg/Code/cvochartermay26/website/donate-form-nosig.pdf")
print("Done")
