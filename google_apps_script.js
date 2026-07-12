/**
 * Editkaro.in - Google Sheets Backend Integration Script
 * 
 * INSTRUCTIONS FOR SETTING UP GOOGLE SHEETS:
 * 
 * 1. Create a new Google Spreadsheet in your Google Drive.
 * 2. Set the sheet headers in the first row (A1 to I1):
 *    - Timestamp | Form Type | Email | Name | Phone | Message | Style | Budget | Call Details
 * 3. Go to the menu: Extensions -> Apps Script.
 * 4. Delete any code in the editor and paste this entire script.
 * 5. Click "Save" (disk icon).
 * 6. Click the blue "Deploy" button -> "New deployment".
 * 7. Click the gear icon next to "Select type" and choose "Web app".
 * 8. Set the deployment configuration:
 *    - Description: Editkaro Web Forms Integration
 *    - Execute as: Me (your-email@gmail.com)
 *    - Who has access: Anyone
 * 9. Click "Deploy". Authorize permissions when prompted by Google.
 * 10. Copy the generated "Web app URL" (ends with /exec).
 * 11. Open `app.js` in your codebase, find `window.GOOGLE_SCRIPT_URL`, and replace the placeholder URL with your Web app URL.
 */

function doPost(e) {
  // CORS Preflight handling fallback
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };

  try {
    var lock = LockService.getScriptLock();
    // Wait for up to 30 seconds to prevent concurrent write issues
    lock.waitLock(30000);

    // Open the spreadsheet (uses the active sheet the script is bound to)
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getActiveSheet();
    
    // Get form parameters
    var params = e.parameter;
    
    // Extracted details
    var timestamp = new Date();
    var formType = params.formType || "unknown";
    var email = params.email || "";
    var name = params.name || "";
    var phone = params.phone || "";
    var message = params.message || "";
    var style = params.style || "";
    var budget = params.budget || "";
    var callDetails = "";
    
    // Parse extra details if present
    if (params.callDate && params.callTime) {
      callDetails = "Call: " + params.callDate + " @ " + params.callTime;
    }
    if (params.quoteDetails) {
      callDetails += " | Quote Details: " + params.quoteDetails;
    }

    // Append a new row to the sheet
    sheet.appendRow([
      timestamp,
      formType,
      email,
      name,
      phone,
      message,
      style,
      budget,
      callDetails
    ]);

    // Release the script lock
    lock.releaseLock();

    // Return success JSON response
    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);

  } catch (err) {
    // Return error JSON response
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
  }
}

// OPTIONS handler for CORS preflight support
function doOptions(e) {
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders(headers);
}
